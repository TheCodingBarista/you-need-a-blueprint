function getCategories() {
    fetch("http://localhost:8080/categories")
    .then(resp => resp.json())
  }

  function createCategory() {
    const category = {
      name: document.getElementById('categoryname').value,
      total_saved: document.getElementById('total-saved').value,
      total_needed: document.getElementById('total-needed').value,
    }

    fetch("http://localhost:8080/categories", {
      method: 'POST',
      body: JSON.stringify(category),
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
    })
    .then(resp => resp.json())
    .then(category => {
      getCategories()
    });
  }