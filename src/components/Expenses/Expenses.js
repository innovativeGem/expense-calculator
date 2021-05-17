import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
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
      <Card>
        <ExpensesList expenses={filterExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
