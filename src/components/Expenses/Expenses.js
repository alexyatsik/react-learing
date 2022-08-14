import "./Expenses.css";
import {Card} from "../UI/Card";
import {ExpenseItem} from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2022');

  const getSelectedYearHandler = (year) => {
    setSelectedYear(year);
  }

  const filteredData = props.data.filter(item => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  let expensesContent = filteredData.map(expense =>
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />);
  if (filteredData.length === 0)
    expensesContent = <p>No expenses found.</p>

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={selectedYear} getSelectedYear={getSelectedYearHandler}/>
        {expensesContent}
      </Card>
    </div>
  );
}

export { Expenses };