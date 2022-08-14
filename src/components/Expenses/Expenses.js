import "./Expenses.css";
import {Card} from "../UI/Card";
import {ExpenseItem} from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2022');
  const [filteredData, setFilteredData] = useState(props.data.filter(item => {
    return parseInt(item.date.getFullYear()) === parseInt(selectedYear);
  }));
  const getSelectedYearHandler = (year) => {
    setSelectedYear(year);
    filterData(year);
  }
  const filterData = (year) => {
    setFilteredData(props.data.filter(item => {
      return parseInt(item.date.getFullYear()) === parseInt(year);
    }));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={selectedYear} getSelectedYear={getSelectedYearHandler}/>
        {
          filteredData.map(expense =>
            <ExpenseItem
              key={expense.id}
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