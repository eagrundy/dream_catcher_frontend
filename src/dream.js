
class Dream {
    // store each dreams. static is a class variable
    static all = []
    static container = document.getElementById('dream-list')

    constructor({ id, name, description, image_url, achieved, date_achieved, category_id }) {
        this.name = name
        this.description = description
        this.image_url = image_url
        this.achieved = achieved
        this.dateAchieved = date_achieved
        this.id = id
        this.categoryId = category_id

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
            this.deleteDream(e)
        } else if (e.target.innerText === "Save") {
            e.target.innerText = "Edit"
            // save this info to the DB
            // turn all input fields back into spans
            this.saveUpdatedDream()
        }
    }

    // createEditFields = (editBtn) => {
    //     const li = this.element
    //     const div = this.element.querySelector('div')

    //     for (const e of div.children) {
    //         let inputValue = e.innerText
    //         let name = e.classList[0]
    //         e.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}">`
    //     }
    // }

    deleteDream = (e) => {
        this.element.remove() // remove it before the fetch request 
        dreamApi.deleteDream(this.id)
    }

    // saveUpdatedDream = () => {
    //     this.name = this.element.querySelector(".edit-name").value
    //     this.image_url = this.element.querySelector(".edit-image_url").value
    //     this.description = this.element.querySelector(".edit-description").value
    //     this.achieved = this.element.querySelector(".edit-achieved").value
    //     this.date_achieved = this.element.querySelector(".edit-date_achieved").value

    //     dreamApi.editDream(this)
    // }


    render() {
        // innerHTMl only replaces what is inside the li
        this.element.innerHTML = `
            <div data-id="${this.id}">
            <li>
            <strong><h1>${this.name}</h1></strong>
                <img src=${this.image_url} width="300" height="300" alt="..."><br>
                <span class="description">${this.description}</span><br>
                <span class="achieved">${this.achieved}</span><br>
                <span class="dateAchieved">${this.dateAchieved}</span>
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

}
