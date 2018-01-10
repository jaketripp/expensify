import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import total from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expenseTotal, totalNumberOfExpenses }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expenseTotal / 100).format('$0,0.00');

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpenseTotal}</span>
                </h1>
                <h3 className="page-header__subtitle"><span>{totalNumberOfExpenses}</span> total expenses</h3>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const expenseCount = visibleExpenses.length;
    const totalNumberOfExpenses = state.expenses.length
    const expenseTotal = total(visibleExpenses);
    return {
        expenseCount,
        expenseTotal,
        totalNumberOfExpenses
    }
};

export default connect(mapStateToProps)(ExpensesSummary);