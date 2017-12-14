import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import total from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expenseTotal / 100).format('$0,0.00');

    return (
        <div>
            <h1>
            Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}
            </h1>
        </div>
    );
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const expenseCount = visibleExpenses.length;
    const expenseTotal = total(visibleExpenses);
    return {
        expenseCount,
        expenseTotal        
    }
};

export default connect(mapStateToProps)(ExpensesSummary);