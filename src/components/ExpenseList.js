import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem 
                        key={expense.id}
                        {...expense}
                    />
                })
            ) 
        }
    </div>
);


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

// first () takes function that returns what part of the store you want to access
// second () takes Component to connect
export default connect(mapStateToProps)(ExpenseList);
