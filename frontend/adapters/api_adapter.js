class ApiAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000"
    }

    getCategories() {
        return fetch('${this.baseUrl}/categories')
        .then(resp => resp.json())
    }
}