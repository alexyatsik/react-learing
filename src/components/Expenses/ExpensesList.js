import './ExpensesList.css';
import {ExpenseItem} from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.data.length === 0)
    return <p className="expenses-list__fallback">Found no expenses.</p>

  return (
    <ul className="expenses-list">
      {props.data.map(expense =>
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />)}
    </ul>
  );
}

export { ExpensesList };