import "./ExpenseForm.css";
import {useState} from "react";

const ExpenseForm = (props) => {
  const [titleInput, setTitleInput] = useState('');
  const [priceInput, setPriceInput] = useState('');
  const [dateInput, setDateInput] = useState('');

  const titleChangeHandler = (event) => {
    setTitleInput(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPriceInput(event.target.value);
  }
  const dateChangeHandler = (event) => {
    setDateInput(event.target.value);
  }
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titleInput,
      date: new Date(dateInput),
      amount: parseInt(priceInput)
    }
    props.onSubmitForm(expenseData);

    setPriceInput('');
    setTitleInput('');
    setDateInput('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="Text" value={titleInput} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" value={priceInput} min="0.01" step="0.01" onChange={priceChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={dateInput} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onClickCancelHandler}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export {ExpenseForm};