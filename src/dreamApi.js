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
            // dream:{
                name: nameInput.value,
                image_url: imageInput.value,
                description: descriptionInput.value,
                achieved: achievedInput.value,
                category_id: dropdown.value

            // }
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