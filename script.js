const incomeInp = document.querySelector("#income");
const expenseInp = document.querySelector("#expenseAmount");
const selectInp = document.querySelector("#select");
const addBtn = document.querySelector("#addExpense");
const calculateBtn = document.querySelector("#calculateBtn");
const categoryVal = document.querySelector("#categoryVal");
const totalExpense = document.querySelector("#totalExpense span");
const savingVal = document.querySelector("#savingVal span");
const savingElement = document.querySelector(".savingVal");

let finalVal = 0;

calculateBtn.addEventListener("click", () => {
  calculate();
});

addBtn.addEventListener("click", () => {
  calculateExpense();
});

const calculateExpense = () => {
  if (!incomeInp.value || !expenseInp.value || !selectInp.value) {
    alert("fill all the fields");
    return;
  }
  if (incomeInp.value <= 0 || expenseInp.value <= 0) {
    alert("Enter valid numbers");
    return;
  }
  let income = Number(incomeInp.value);
  let expense = Number(expenseInp.value);
  let category = selectInp.value;
  categoryVal.style.display = "flex";
  categoryVal.innerText = `${category}:$ ${expense}.00`;

  totalExpense.innerText = `${expense}.00`;

  finalVal = `$${income - expense}`;
};

const calculate = () => {
  savingElement.style.display = "flex";
  savingVal.innerText = finalVal;
  setTimeout(() => {
    window.location.reload();
  }, 5000);
};
