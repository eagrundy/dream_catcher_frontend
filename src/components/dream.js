class Dream {
    constructor(dreamJSON) {
        this.id = dreamJSON.id
        this.name = dreamJSON.name
        this.image_url = dreamJSON.image_url
        this.description = dreamJSON.description
        this.achieved = dreamJSON.achieved
        this.date_achieved = dreamJSON.date_achieved
        this.category_id = dreamJSON.category_id
    }
    renderLi() {
        return `<li>${this.name}</li>`
    }
    
}

//     static all = []

//     constructor({id, name, description, image_url, achieved, date_achieved, category_id}){
//         this.id = id
//         this.name = name
//         this.description = description
//         this.image_url = image_url
//         this.achieved = achieved
//         this.date_achieved = date_achieved
//         this.category_id = category_id

//         Dream.all.push(this)

//     }
// }
