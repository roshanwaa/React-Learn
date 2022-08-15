import React from 'react'


import './ExpenseForm.css'
export const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" placeholder="Title" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='10' step="10" placeholder="Amount" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2022-08-01' max='2022-12-31' placeholder='dd.mm.yyyy' />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expenses</button>
            </div>
        </form>
    )
}
