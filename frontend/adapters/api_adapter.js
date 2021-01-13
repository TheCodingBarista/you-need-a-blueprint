class ApiAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000"
    }

    getBudgets() {
        return fetch('${this.baseUrl}/budgets')
        .then(resp => resp.json())
    }
}