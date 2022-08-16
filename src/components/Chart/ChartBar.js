const ChartBar = (props) => {
  let innerFillHeight = '0%';

  if(props.maxValue > 0)
    innerFillHeight = Math.round(props.value / props.maxValue * 100) + '%';

  return (
    <div>
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div className="chart-bar__fill" style={{height: innerFillHeight}} />
        </div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </div>
  );
}

export { ChartBar };