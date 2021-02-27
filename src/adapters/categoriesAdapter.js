const BASE_URL = "http://localhost:3000"
const CATEGORIES_URL = `${BASE_URL}/categories`
const DREAMS_URL = `${BASE_URL}/dreams`

class CategoriesAdapter {
    constructor() {
        this.categoriesUrl = CATEGORIES_URL
        this.dreamsUrl = DREAMS_URL
    }

    getDreams() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}