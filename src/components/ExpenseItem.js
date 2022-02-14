import React from "react";
import { TiDelete } from "react-icons/ti";

function ExpenseItem(props) {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-center m-2">
        <div className="">
          {props.name} <br />
          <p>{props.date}</p>
        </div>

        <div>
          <span className="mx-4 badge text-dark bg-info  ">{props.cost}</span>
          <TiDelete size="2em"></TiDelete>
        </div>
      </li>
    </div>
  );
}

export default ExpenseItem;
