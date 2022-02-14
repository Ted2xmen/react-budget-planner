import {useContext} from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

function ExpenseItem(props) {

    const {dispatch} = useContext(AppContext);
    
    const handleDeleteExpense = () => {
      dispatch({
        type: "DELETE_EXPENSE",
        payload: props.id,
      })
    }

  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-center m-2">
        <div className="">
          {props.name} <br />
          <p>{props.date}</p>
        </div>

        <div>
          <span className="mx-4 badge text-dark bg-info  ">{props.cost} TL</span>
          <TiDelete size="2em" onClick={handleDeleteExpense}></TiDelete>
        </div>
      </li>
    </div>
  );
}

export default ExpenseItem;
