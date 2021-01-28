console.log("Yoooo, we in here");

document.addEventListener("DOMContentLoaded", () => {

})

function addCategoryRow() {
  const table = document.getElementById("budgetTable");
  const row = table.insertRow(1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  cell1.innerHTML = document.getElementById("categoryname").value;
  cell2.innerHTML = document.getElementById("total-saved").value;
  cell3.innerHTML = document.getElementById("total-needed").value;
}