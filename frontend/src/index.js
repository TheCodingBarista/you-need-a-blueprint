console.log("Yoooo, we in here");

document.addEventListener("DOMContentLoaded", () => {

})

function onFormSubmit() {
  addCategoryRow();
  resetForm();
}

function addCategoryRow() {
  const table = document.getElementById("budgetTable");
  const row = table.insertRow(1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  cell1.innerHTML = document.getElementById("categoryname").value;
  cell2.innerHTML = document.getElementById("total-saved").value;
  cell3.innerHTML = document.getElementById("total-needed").value;
  cell4.innerHTML = `<button onClick="onDelete(this)">Delete</button>`;
}

function onDelete(td) {
  row = td.parentElement.parentElement;
  document.getElementById("budgetTable").deleteRow(row.rowIndex);
}

function resetForm() {
  document.getElementById("categoryname").value = "";
  document.getElementById("total-saved").value = "";
  document.getElementById("total-needed").value = "";
}