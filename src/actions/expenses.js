import uuid from 'uuid';
import database from '../firebase/firebase';
// before
// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// with firebase and async
// component calls action generator
// action generator returns function
// component dispatches function (?)
// function runs (has the ability to dispatch other actions and do whatever it wants)

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    // returning a function relies on redux thunk
    return (dispatch) => {
        // pull these variables off the data passed in, default to '' and 0
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt }
        // returning a promise instead of just having the promise run (similar to the idea of returning a function vs running function)
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    }
};

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// id string and updates obj
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});