function save_data(e) {

    e.preventDefault();
  
    if (typeof(Storage) !== "undefined") {
      var expenseType = document.getElementById('expense_type').value;
      var expenseDate = document.getElementById('expense_date').value;
      var amount = document.getElementById('amount').value;
  
      var expense_data = getExpenseData();
  
      expense_data.push({
        id: Date.now(),
        expenseType: expenseType,
        expenseDate: expenseDate,
        amount: amount
      });
  
      localStorage.setItem("expense_data", JSON.stringify(expense_data));
          display_table_data();
    } else {
      alert("No storage available in the browser");
    }
  
  }
  

function getExpenseData() {
if (localStorage.expense_data == "" || !localStorage.expense_data) {
    expense_data = [];
} else {
    expense_data = JSON.parse(localStorage.expense_data);
}
return expense_data;
}
  
function display_table_data() {
var expense_data = getExpenseData();
var table = document.getElementById("t1");
table.innerHTML = '';
var tHead = table.createTHead();

var hrow = tHead.insertRow(0);

var hcell1 = hrow.insertCell(0);
var hcell2 = hrow.insertCell(1);
var hcell3 = hrow.insertCell(2);

hcell1.innerHTML = "EXPENSE TYPE";
hcell2.innerHTML = "DATE";
hcell3.innerHTML = "AMOUNT";

var tBody = table.createTBody();
for (var i = 0; i < expense_data.length; i++) {

    var row = tBody.insertRow(0);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = expense_data[i].expenseType;
    cell2.innerHTML = expense_data[i].expenseDate;
    cell3.innerHTML = expense_data[i].amount;
}

}
