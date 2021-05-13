import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (expenseData) => {
        const newExpenseData = {
            ...expenseData,
            id: Math.random().toFixed(3).toString()
        }
        props.onAddNewExpense(newExpenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
}

export default NewExpense;