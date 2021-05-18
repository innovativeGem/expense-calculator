import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {

  const [expenseYear, setExpenseYear] = useState('2021');

  const expenseYearHandler = (year) => {
    setExpenseYear(year);
  }

  const filterExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === expenseYear);

  return (
    <div className="expenses">
      <ExpensesFilter
        onSelectYear={expenseYearHandler}
        year={expenseYear}
      />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList expenses={filterExpenses} />
    </div>
  );
}

export default Expenses;
