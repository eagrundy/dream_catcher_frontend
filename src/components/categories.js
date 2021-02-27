class Categories {
    constructor() {
        this.categories = []
        this.adapter = new CategoriesAdapter()
        this.addEventListenersAndBindings()
        this.loadCategories()
    }

    addEventListenersAndBindings() {
        // document.addEventListener("DOMContentLoaded", () => this.loadCategories())
        this.categoriesContainer = document.getElementById('categories-container')
        this.newCategoryName = document.getElementById("new-category-name")
        this.categoryForm = document.getElementById('new-category-form')
        // this.categoryForm = addEventListener('submit', this.addCategory.bind(this))
        // this.newCategoryForm = document.getElementById("new-category-form")
        this.categoryForm.addEventListener('submit', this.createCategory.bind(this))
    }

    createCategory(e) {
        e.preventDefault()
        const value = this.newCategoryName.value

        this.adapter.createCategory(value).then(category => {
            this.categories.push(new Category(category))
            this.newCategoryName.value = ''
            this.render()
        })
    }

    loadCategories() {
        this.adapter.getCategories().then(categories => {
            categories.forEach(category => this.categories.push(new Category(category)))
        })
        .then(() => {
            this.render()
        })

        // this.adapter.getCategories()
        // .then(categories => {
        //     categories.forEach(category => new Category (category))
        // })
    }

    render() {
        // const categoriesContainer = document.getElementById('categories-container')
        this.categoriesContainer.innerHTML = this.categories.map(category => category.renderLi()).join(``)
    }
}