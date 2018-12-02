const selectExpensesTotal = expenses => {
  if (expenses && !expenses.length) {
    return expenses.amount;
  } else if (expenses && expenses.length) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return expenses.map(expense => expense.amount).reduce(reducer);
  }
  return 0;
};

export default selectExpensesTotal;
