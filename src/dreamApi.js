// handle all fetch requests for dreams

class DreamApi {

    constructor(endPoint) {
        this.baseUrl = `${endPoint}/dreams`
    }

    getDreams() {
        fetch(this.baseUrl)
        .then(r => r.json())
        .then(json => {
            json["data"].forEach(element => {
                // debugger;
                const d = new Dream({ id: element.id, ...element.attributes })
                d.addToDom()
            })
        })
    }

    createDream() {
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

    sortRender(array){
        document.querySelector("#dream-list").innerHTML = " "
        // document.querySelector("#category-list").style.display = "block"
        // document.querySelector("#category-list").style.display = "none"
        array.forEach(dream => {
            let s = new Dream(dream)
            s.addToDom()
        })
    }

    inputSorted() {
        const text = document.querySelector('#sort').value
        document.querySelector("#dream-list").innerHTML = " "
        if(text === "all" ) {
            this.sortRender(Dream.all)
        }
        else{
        const filtered = Dream.all.filter(dream => dream.achieved.includes(text))
        // debugger;
        filtered.forEach(dream => dream.addToDom())
        // this.sortRender(filtered)
        }
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