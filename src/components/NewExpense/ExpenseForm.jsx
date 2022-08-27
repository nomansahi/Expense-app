import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterTitle,
      price: enterAmount,
      date: new Date(enterDate),
    };
    props.onExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };
  return (
    <div className="btnPostion">
      <form onSubmit={submitHandler}>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <label htmlFor="title" className="form-label fw-bold">
                Title
              </label>
              <input
                type="text"
                min="0.01"
                step="0.01"
                name="title"
                value={enterTitle}
                className="form-control fw-bold"
                onChange={titleChangeHandler}
              />
            </div>
            <div className="col-5">
              <label htmlFor="title" className="form-label fw-bold">
                Amount
              </label>
              <input
                type="number"
                className="form-control "
                name="price"
                value={enterAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="col-5 mt-4">
              <label htmlFor="title" className="form-label  fw-bold">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                min="2019-1-1"
                max="2022-12-31"
                name="date"
                value={enterDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary button"
          onClick={props.onAddExpense}
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
