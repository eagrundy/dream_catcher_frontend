// handle all fetch requests for dreams

class DreamApi {

    constructor(endPoint) {
        this.baseUrl = `${endPoint}/dreams`
    }

    getDreams() {
        // the path to the resource I want to fetch
        fetch(this.baseUrl)
        // returns a promise containing the response r (a Response object). This is just an HTTP response, not the actual JSON.
        .then(r => r.json())
        // To extract the JSON body content from the response, we use the json() method
        .then(json => {
            json["data"].forEach(element => {
                // debugger;
                // Constructor invocation. A new object is created. "this" points to the newly created onject
                const d = new Dream({ id: element.id, ...element.attributes })
                d.addToDom()
            })
        })
    }

    createDream() {
        // separate in its own method
        const dreamInfo = {
                name: nameInput.value,
                image_url: imageInput.value,
                description: descriptionInput.value,
                achieved: achievedInput.value,
                category_id: dropdown.value
        }

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(dreamInfo)
        }

        fetch(this.baseUrl, configObj)
        .then(r => r.json())
        // separate so it does not repeat
        .then(json => {
            // debugger;
            // renderDream(json.data)
            const d = new Dream({ id: json.data.id, ...json.data.attributes })
            // const d = new Dream(json)
            d.addToDom()
        })
    }

    
    deleteDream = (id) => {
        const configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
        
        fetch(`${this.baseUrl}/${id}`, configObj)
        .then(r => r.json())
        .then(json => alert(json.message))
    }


    
    inputFilter() {
        const text = document.querySelector('#search').value
        const filtered = Dream.all.filter(dream => dream.name.includes(text))
        //when event is detected, recognize the input and filter through Dream.all
        //show chosen Dream.all
        //hide not chosen
        document.querySelector("#dream-list").innerHTML = ""
        filtered.forEach(dream => dream.addToDom())
    } 

    // how to put inputFilter and inputSorted to work together? 
    // when filtering by achieved and choosing all dreams, 
    // how can I use search if they are not connected?
    inputSorted() {
        const text = document.querySelector('#sort').value
        document.querySelector("#dream-list").innerHTML = ""
        if(text === "all" ) {
            const allDreams = Dream.all
            allDreams.forEach(dream => dream.addToDom())
        }
        else{
        const filtered = Dream.all.filter(dream => dream.achieved.includes(text))
        // debugger;
        filtered.forEach(dream => dream.addToDom())
        // this.sortRender(filtered)
        }
    }

    // added for live coding challenge
    repeatPizza() {
        // document.querySelector("#dream-list").innerHTML = ""
        const dreamInfo = {
            name: "Cheese",
            image_url: "https://dennys.id/wp-content/uploads/2019/04/skillets-veggie.jpg",
            description: "Pepperoni pizza is good",
            achieved: "Yes",
            category_id: "29"
    }

    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(dreamInfo)
    }

    fetch(this.baseUrl, configObj)
    .then(r => r.json())
    .then(json => {
        // debugger;
        // renderDream(json.data)
        const r = new Dream({ id: json.data.id, ...json.data.attributes })
        // const d = new Dream(json)
        r.addToDom()
    })

    }
}









// editDream = (dream) => {
//     // debugger
//     let {name, image_url, description, achieved, date_achieved} = dream
//     const dreamInfo = {
//         name,
//         image_url,
//         description,
//         achieved,
//         date_achieved
//     }

//     const configObj = {
//         method: 'PATCH',
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         },
//         body: JSON.stringify(dreamInfo)
//     }
   
//     fetch(`${this.baseUrl}/${dream.id}`, configObj)
//     .then(r => r.json())
//     .then(json => {
        
//         dream.render()
//     })
// }


    
    
// sortRender(array){
//     document.querySelector("#dream-list").innerHTML = ""
//     // document.querySelector("#dream-list").style.display = "block"
//     // document.querySelector("#category-list").style.display = "none"
//     array.forEach(dream => {
//         let s = new Dream(dream)
//         s.addToDom()
//     })
// }