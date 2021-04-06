class Dream {
    constructor(dreamJSON) {
        this.id = dreamJSON.id
        this.name = dreamJSON.name
        this.image_url = dreamJSON.image_url
        this.description = dreamJSON.description
        this.achieved = dreamJSON.achieved
        this.date_achieved = dreamJSON.date_achieved
        this.category_id = dreamJSON.category_id
        this.category = dreamJSON.category
    }

    renderLi() {
        // return `<li>${this.name}
        // ${this.description}</li>`
        return `
        <li>
    <strong><h1>${this.name}</h1></strong>
    <img src=${this.image_url} width="300" height="300" alt="">
            <h3>${this.description}</h3><br>
            <h3>Dream Achieved? ${this.achieved ? 'YES' : 'Not Yet'}</h3>
            <h3>Date Achieved: ${this.date_achieved}</h3>
            <h3>${this.category_id}</h3>
        <button data-id=${this.id}>edit</button>
      </h3>
    </li><br>`;
    }
    
}
