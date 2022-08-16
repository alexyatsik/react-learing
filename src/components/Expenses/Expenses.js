import "./Expenses.css";
import {Card} from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import {ExpensesList} from "./ExpensesList";
import {ExpensesChart} from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2022');

  const getSelectedYearHandler = (year) => {
    setSelectedYear(year);
  }

  const filteredData = props.data.filter(item => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={selectedYear} getSelectedYear={getSelectedYearHandler}/>
        <ExpensesChart data={filteredData}/>
        <ExpensesList data={filteredData} />
      </Card>
    </div>
  );
}

export { Expenses };