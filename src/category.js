class Category {
    constructor(categoryJSON) {
        this.id = categoryJSON.id
        this.name = categoryJSON.name
    }
    renderLi() {
        return `<li>${this.name}</li>`
    }
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