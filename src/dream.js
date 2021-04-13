
class Dream {
    // store each dreams. static is a class variable
    static all = []
    static container = document.getElementById('dream-list')

    constructor({ id, name, description, image_url, achieved, category_id, category }) {
        this.name = name
        this.description = description
        this.image_url = image_url
        this.achieved = achieved
        this.id = id
        this.categoryId = category_id
        this.category = category

        // setup the html element that contain the dream
        this.element = document.createElement('li')
        this.element.dataset["id"] = id
        this.element.id = `dream-${id}`

        this.element.addEventListener('click', this.handleLiClick)

        Dream.all.push(this)
    }

    static filterByCategory(filteredCategory){
        // display only the items in the active category
        // if no categories are active, display all
        if(filteredCategory){
            for(const dream of Dream.all){
                if(dream.categoryId === parseInt(filteredCategory.id)){
                    //unhide 
                    dream.element.style.display = "";
                }else{
                    //hide element
                    dream.element.style.display = "none";
                }
            }

        } else {
              // remove all things from DOM
            //   Item.container.innerHTML = ''
              // use our add to dom and put all the dreams back on
              for(const dream of Dream.all){
                //   dream.addToDom()
                dream.element.style.display = ""
              }
        }
    }

    // arrow function because it is used as a callback in an event listener
    handleLiClick = (e) => {
        if (e.target.innerText === "Delete") {
            this.deleteDream(e)
        }
    }


    deleteDream = (e) => {
        this.element.remove() // remove it before the fetch request 
        dreamApi.deleteDream(this.id)
    }


    render() {
        const isAchieved = this.dateAchieved === "Yes"
        // innerHTMl only replaces what is inside the li
        this.element.innerHTML = `
            <div data-id="${this.id}">
            <li>
            <h1><strong><u>${this.name}</u></strong></h1><br>
                <img src=${this.image_url} width="300" height="300" alt="..."><br><br>
                <span class="description">${this.description}</span><br><br>
                <span class="achieved"><u>Achieved?</u> ${this.achieved}</span><br>
                <span class="dreamCategory"><u>Category</u>: ${this.category.name}</span>
            </div><br>
            <i>Delete this dream ></i>
            <button class="delete is-large" data-id="${this.id}">Delete</button><br>
            </li><br><br>
        `
        return this.element
    }

    addToDom() {
        this.render()
        Dream.container.appendChild(this.element)
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


// saveUpdatedDream = () => {
    //     this.name = this.element.querySelector(".edit-name").value
    //     this.image_url = this.element.querySelector(".edit-image_url").value
    //     this.description = this.element.querySelector(".edit-description").value
    //     this.achieved = this.element.querySelector(".edit-achieved").value
    //     this.date_achieved = this.element.querySelector(".edit-date_achieved").value

    //     dreamApi.editDream(this)
    // }


    // if (e.target.innerText === "Edit") {
        //     e.target.innerText = "Save"
        //     this.createEditFields(e.target)
        // } else if (e.target.innerText === "Delete") {
        //     this.deleteDream(e)
        // } else if (e.target.innerText === "Save") {
        //     e.target.innerText = "Edit"
        //     // save this info to the DB
        //     // turn all input fields back into spans
        //     this.saveUpdatedDream()