import './Chart.css';
import {ChartBar} from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.data.map(dataItem => (
        <ChartBar
          key={dataItem.label}
          value={dataItem.value}
          maxValue={null}
          label={dataItem.label}
        />
      ))}
    </div>
  );
}

export { Chart };