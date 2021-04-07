
class Dream {
    constructor({id, name, description, image_url, achieved, date_achieved, category_id}) {
        this.name = name
        this.description = description
        this.image_url = image_url
        this.achieved = achieved
        this.date_achieved = date_achieved
        this.category_id = category_id
        
        this.element = document.createElement("div")
        this.element.id = `dream-${id}`
        this.drinksList = document.querySelector("#dreams-list")
    }

    // renderLi() {
    //     // return `<li>${this.name}
    //     // ${this.description}</li>`
    //     return `
    //     <li>
    // <strong><h1>${this.name}</h1></strong>
    // <img src=${this.image_url} width="300" height="300" alt="">
    //         <h3>${this.description}</h3><br>
    //         <h3>Dream Achieved? ${this.achieved ? 'YES' : 'Not Yet'}</h3>
    //         <h3>Date Achieved: ${this.date_achieved}</h3>
    //         <h3>${this.category_id}</h3>
    //     <button data-id=${this.id}>edit</button>
    //   </h3>
    // </li><br>`;
    // }
    
}
