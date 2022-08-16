import "./NewExpense.css";
import { useState} from "react";
import {ExpenseForm} from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAddClicked, setIsAddCliked] = useState(false);

  const onSubmitHandler = (data) => {
    const newExpense = {
      ...data,
      id: Math.random().toString()
    }
    props.onAddNewExpense(newExpense);
    onClickCancelHandler();
  }

  const onAddHandler = () => {
    setIsAddCliked(true);
  }

  const onClickCancelHandler = () => {
    setIsAddCliked(false);
  }

  let content = <button onClick={onAddHandler}>Add new expense</button>
  if (isAddClicked) {
    content = <ExpenseForm onSubmitForm={onSubmitHandler} onClickCancelHandler={onClickCancelHandler} />;
  }

  return (
    <div className="new-expense">
      {content}
    </div>
  );
};

export { NewExpense };