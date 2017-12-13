import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import getVisibleExpenses from './selectors/expenses';

import expensesReducer from './reducers/expenses';
import filtersReducer from './reducers/filters';

import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    console.log(state.filters);
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 })); 
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 })); 


// 1. set up Provider
// then use connect

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));