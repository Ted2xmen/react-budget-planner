import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const expenses = [
    { id: 1223, date: Date(), name: "Shopping", cost: 250 },
    { id: 1263, date: Date(), name: "Udemy courses", cost: 50 },
    { id: 1213, date: Date(), name: "Spotify", cost: 50 },
    { id: 1273, date: Date(), name: "Youtube Premium", cost: 50 },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
        ></ExpenseItem>
      ))}
    </ul>
  );
}

export default ExpenseList;
