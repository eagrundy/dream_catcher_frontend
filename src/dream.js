
class Dream {
    // store each dreams. static is a class variable
    static all = []
    static container = document.getElementById('dream-list')

    constructor({ id, name, description, image_url, achieved, date_achieved, category_id }) {
        this.name = name
        this.description = description
        this.image_url = image_url
        this.achieved = achieved
        this.date_achieved = date_achieved
        this.id = id

        // setup the html element that contain the dream
        this.element = document.createElement('li')
        this.element.dataset["id"] = id
        this.element.id = `dream-${id}`

        this.element.addEventListener('click', this.handleLiClick)

        Dream.all.push(this)
    }

    // arrow function because it is used as a callback in an event listener
    handleLiClick = (e) => {
        if (e.target.innerText === "Edit") {
            e.target.innerText = "Save"
            this.createEditFields(e.target)
        } else if (e.target.innerText === "Delete") {
            this.deleteItem(e)
        } else if (e.target.innerText === "Save") {
            e.target.innerText = "Edit"
            // save this info to the DB
            // turn all input fields back into spans
            this.saveUpdatedItem()
        }
    }

    render() {
        // innerHTMl only replaces what is inside the li
        this.element.innerHTML = `
            <div data-id="${this.id}">
            <li>
            <strong><h1>${this.name}</h1></strong>
                <img src=${this.image_url} width="300" height="300" alt=""><br>
                <span class="description">${this.description}</span><br>
                <span class="achieved">${this.achieved ? 'YES' : 'Not Yet'}</span><br>
                <span class="date_achieved">${this.date_achieved}</span>
            </div>
            <button class="edit" data-id="${this.id}">Edit</button>
            <button class="delete" data-id="${this.id}">Delete</button>
            </li>
        `
        return this.element
    }

    addToDom() {
        this.render()
        Dream.container.appendChild(this.element)
    }

    // static fetchDreams(id){
    //     fetch(`http://localhost:3000/categories/${id}/dreams`)
    //     .then(res => res.json())
    //     .then(dreamData => {
    //         dreamData.forEach(dream => {
    //             let d = new Dream(dream)
    //             d.addToDom()
    //         })
    //     })
    // }

    // addToDom(){
    //     this.dreamsList.appendChild(this.setElementHTML())
    // }

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
