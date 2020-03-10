import React from "react";

const Statistic = ({ good, neutral, bad, getTotal, getPercentage }) => {
  return (
    <>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <p>Total : {getTotal()}</p>
      <p>Percentage : {getPercentage()}%</p>
    </>
  );
};

export default Statistic;
