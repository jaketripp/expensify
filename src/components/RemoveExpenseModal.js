import React from 'react';
import Modal from 'react-modal';

const RemoveExpenseModal = (props) => (
    <Modal
        isOpen={!!props.isModalActive}
        onRequestClose={props.closeModal}
        contentLabel="Remove Expense Confirmation"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Are you <em>sure</em> you want to delete this expense?</h3>
        <div className="modal__buttons">
            <button className="button button--secondary" onClick={props.closeModal}>Cancel</button>
            <button className="button button--danger" onClick={props.removeExpense}>I'm sure</button>
        </div>
        
    </Modal>
);

export default RemoveExpenseModal;