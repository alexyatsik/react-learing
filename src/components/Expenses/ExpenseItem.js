import {Card} from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";
import {useState} from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const changeTitleHandler = () => {
    setTitle('Updated!');
  };
  return (
    <Card className="expense-item">
      <ExpenseDate  date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <span className="expense-item__price">${props.amount}</span>
        <button onClick={changeTitleHandler}>Change title</button>
      </div>
    </Card>
  );
}

export { ExpenseItem };