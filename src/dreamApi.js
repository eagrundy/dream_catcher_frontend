// handle all fetch requests

class DreamApi {

    constructor(endPoint){
        this.baseUrl = `${endPoint}/dreams`
    }

    getDreams(){
        fetch(this.baseUrl)
        .then(r => r.json())
        .then( json => {
            json["data"].forEach(element => {
                const d = new Dream({id: element.id, ...element.attributes})
                d.addToDom()
            })
        })
    }

}