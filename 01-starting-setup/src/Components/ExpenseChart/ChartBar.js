import React from 'react';
import './ChartBar.css';

export const ChartBar = (props) => {
  let barFilterHight = '0%';
  if (props.maxValue > 0) {
    barFilterHight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFilterHight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label} </div>
    </div>
  );
};
