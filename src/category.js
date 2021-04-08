const baseURL = "http://localhost:3000/"
const categoriesList = document.querySelector("#categories-list")
const categoryShow = document.querySelector("#category-show")

class Category {
    static all = []
    constructor({id, name}) {
        this.id = id
        this.name = name
        Category.all.push(this)
    }

    static fetchCategories(){
        fetch(baseURL + "categories")
        .then(res => res.json())
        .then(categoryData => {
            categoryData.forEach(category => {
                let x = new Category(category)
                x.addToDom()
            })
        })
    }

    addToDom(){
        // this.categoriesList.appendChild(this.setElementHTML())
        let cn = document.createElement('h1');
        cn.src = this.name
        cn.id = `category-${this.id}`
        // cn.categoryName = 'coffee-size'
        categoriesList.appendChild(cn)
        // img.addEventListener('click',(e) => this.handleClick(e))
    }

//     setElementHTML(){
//         this.element.innerHTML = `
//         <h1>${this.name}</h1>
//         `   
//         return this.element
//    }
    
    // renderLi() {
    //     return `<li>${this.name}</li>`
    // }
}





// constructor(categoryJSON) {
//     this.name = categoryJSON.name
//     this.id = categoryJSON.id
//     this.image_url = categoryJSON.image_url
//     this.description = categoryJSON.description
//     this.achieved = categoryJSON.achieved
//     this.date_achieved = categoryJSON.date_achieved
//     this.dreams = categoryJSON.dreams
//     this.adapter = new CategoriesAdapter()
//     // this.addBindings()
//     // this.renderCategory()
// }