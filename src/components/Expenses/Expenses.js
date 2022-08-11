import "./Expenses.css";
import {Card} from "../UI/Card";
import {ExpenseItem} from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2022');
  const getSelectedYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={selectedYear} getSelectedYear={getSelectedYearHandler}/>
        <ExpenseItem
          title={props.data[0].title}
          amount={props.data[0].amount}
          date={props.data[0].date}
        />
        <ExpenseItem
          title={props.data[1].title}
          amount={props.data[1].amount}
          date={props.data[1].date}
        />
        <ExpenseItem
          title={props.data[2].title}
          amount={props.data[2].amount}
          date={props.data[2].date}
        />
        <ExpenseItem
          title={props.data[3].title}
          amount={props.data[3].amount}
          date={props.data[3].date}
        />
      </Card>
    </div>
  );
}

export { Expenses };