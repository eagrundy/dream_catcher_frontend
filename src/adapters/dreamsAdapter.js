
const BASE_URL = "http://localhost:3000"
// const CATEGORIES_URL = `${BASE_URL}/categories`
const DREAMS_URL = `${BASE_URL}/dreams`

class DreamsAdapter {
    constructor() {
        // this.categoriesUrl = CATEGORIES_URL
        this.dreamsUrl = DREAMS_URL
    }

    getDreams() {
        return fetch(this.dreamsUrl).then(res => res.json())
    }

    createDream(value) {
        const dream = {
            name: value,
        }
        return fetch(this.dreamsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ dreams }),
        }).then(res => res.json())
    }
}

