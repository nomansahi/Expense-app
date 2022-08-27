import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  return (
    <div>
      <div className="d-block m-2 date pe-3 ">
        <div className="fw-bold">{props.month}</div>
        <div className="fw-light">{props.year}</div>
        <div className="fw-lighter">{props.day}</div>
      </div>
    </div>
  );
};

export default ExpenseDate;
