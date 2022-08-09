import "./NewExpense.css";
import {ExpenseForm} from "./ExpenseForm";

const NewExpense = (props) => {
  const onSubmitHandler = (data) => {
    const newExpense = {
      ...data,
      id: Math.random().toString()
    }
    props.onAddNewExpense(newExpense);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitForm={onSubmitHandler} />
    </div>
  );
};

export { NewExpense };