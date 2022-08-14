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
        {
          props.data.map(expense =>
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />)
        }
      </Card>
    </div>
  );
}

export { Expenses };