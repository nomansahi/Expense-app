import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  let month = props.date.toLocaleString("default", {
    month: "long",
  });
  let Year = props.date.getFullYear();
  let day = props.date.toLocaleString("default", {
    weekday: "long",
  });

  return (
    <div className="mt-4">
      <div className=" container ">
        <div className="expenseItem  rounded ">
          <div className=" d-flex text-light">
            <ExpenseDate month={month} year={Year} day={day} />
            <h2 className="me-auto  title">{props.title}</h2>
            <div className=" px-3 pt-3 price m-4 me-4 rounded fs-5 border border-white">
              ${props.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
