import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import RemoveExpenseModal from './RemoveExpenseModal';
import { startEditExpense, startRemoveExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    state = {
        isModalActive: undefined
    }
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    showModal = () => {
        this.setState((prevState) => ({
            isModalActive: true
        }));
    }
    closeModal = () => {
        this.setState((prevState) => ({
            isModalActive: undefined
        }));
    }
    removeExpense = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
        this.closeModal();
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.showModal}>Remove Expense</button>
                </div>
                <RemoveExpenseModal isModalActive={this.state.isModalActive} closeModal={this.closeModal} removeExpense={this.removeExpense}/>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);