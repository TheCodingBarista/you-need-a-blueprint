class Category {
    constructor(data) {
        this.name = data.name
        this.total_saved = data.total_saved
        this.total_needed = data.total_needed
    }
}

function createCategory() {
    const category = {
      name: document.getElementById('categoryname').value,
      total_saved: document.getElementById('total-saved').value,
      total_needed: document.getElementById('total-needed').value,
    }
  
    fetch("http://localhost:3000/categories", {
      method: 'POST',
      body: JSON.stringify(category),
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
    })
    .then(resp => resp.json())
    .then(data => console.log(data));
  }