// const BASE_URL = "http://localhost:3000"
// const CATEGORIES_URL = `${BASE_URL}/categories`
// const DREAMS_URL = `${BASE_URL}/dreams`

// class CategoriesAdapter {
//     constructor() {
//         this.categoriesUrl = CATEGORIES_URL
//         this.dreamsUrl = DREAMS_URL
//     }

//     getCategories() {
//         return fetch(this.categoriesUrl).then(res => res.json())
//     }
// }

class CategoriesAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/categories'
    }

    getCategories() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    createCategory(value) {
        const category = {
            name: value,
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ category }),
        }).then(res => res.json())
    }
}