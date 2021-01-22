console.log("Yoooo, we in here");

const categoryInput = document.querySelector('.category-input');
const categoryButton = document.querySelector('.category-button');
const budget = document.querySelector('.budget');

categoryButton.addEventListener('click', addCategory);

document.addEventListener("DOMContentLoaded", () => {
})

function addCategoryRow() {
  const table = document.getElementById("budget-table");
  const row = table.insertRow(1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  cell1.innerHTML = "Yooo";
  cell2.innerHTML = "Mel";
  cell3.innerHTML = "Codes";
}






