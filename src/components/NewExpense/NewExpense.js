import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [showExpenseForm, setExpenseForm] = useState(false);

    const saveExpenseDataHandler = (expenseData) => {
        const newExpenseData = {
            ...expenseData,
            id: Math.random().toFixed(3).toString()
        }
        props.onAddNewExpense(newExpenseData);
        setExpenseForm(!showExpenseForm);
    }

    const toggleExpenseFormHandler = () => {
        setExpenseForm(!showExpenseForm);
    }

    let newExpense = <button onClick={toggleExpenseFormHandler}>Add New Expense</button>

    if (showExpenseForm) {
        newExpense = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseData={toggleExpenseFormHandler} />
    }

    return <div className="new-expense">
        {newExpense}
    </div>
}

export default NewExpense;