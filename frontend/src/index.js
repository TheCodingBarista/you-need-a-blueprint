console.log("Yoooo, we in here");

const categoryInput = document.querySelector('.category-input');
const categoryButton = document.querySelector('.category-button');
const budget = document.querySelector('.budget');

categoryButton.addEventListener('click', addCategory);

document.addEventListener("DOMContentLoaded", () => {
})



function addCategory(event){
  console.log("Yo");
  event.preventDefault();
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("category");
  const newCategory = document.createElement("li");
  newCategory.innerText = "test"; 
  newCategory.classList.add("category-item");
  categoryDiv.appendChild(newCategory);
  budget.appendChild(categoryDiv);
  
}

function addCategoryRow() {
  const table = document.getElementById("budget-table");
  const row = table.insertRow(1);
  const cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "Hello";
  cell2.innerHTML = "Test";
}






