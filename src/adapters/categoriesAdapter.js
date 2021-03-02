
const BASE_URL = "http://localhost:3000"
const CATEGORIES_URL = `${BASE_URL}/categories`
const DREAMS_URL = `${BASE_URL}/dreams`

class CategoriesAdapter {
    constructor() {
        this.categoriesUrl = CATEGORIES_URL
        this.dreamsUrl = DREAMS_URL
    }

    getCategories() {
        return fetch(this.categoriesUrl).then(res => res.json())
    }

    createCategory(value) {
        const category = {
            name: value,
        }
        return fetch(this.categoriesUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ category }),
        }).then(res => res.json())
    }

    getDreams() {
        return fetch(this.dreamsUrl).then(res => res.json())
    }

    createDream(newDream) {
        const formData = {
            content: newDream.content, 
            list_id: newDream.listId
        }
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }
        return fetch(this.dreamsUrl, configObj)
        .then(res => res.json())
    }
}