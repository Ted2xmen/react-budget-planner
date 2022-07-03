import {useContext} from "react";
import { FcFullTrash, FcDataConfiguration } from "react-icons/fc";
import { AppContext } from "../context/AppContext";

function ExpenseItem(props) {

    const {dispatch, currency} = useContext(AppContext);
    
    const handleDeleteExpense = () => {
      dispatch({
        type: "DELETE_EXPENSE",
        payload: props.id,
      })
    }

  return (
    <div>
      <li className="rounded-3 list-group-item d-flex justify-content-between align-items-center my-1 hover glass">
        <div className="fs-5 fw-bold">{props.name}</div>

        <div>
          <span className="mx-4 badge text-light bg-success fs-6  ">
            {props.cost} {currency}
          </span>
          <FcDataConfiguration
            className="click text-danger"
            size="2.4em"
            onClick={handleDeleteExpense}
          ></FcDataConfiguration>
          <FcFullTrash
            className="click text-danger mx-1"
            size="2.4em"
            onClick={handleDeleteExpense}
          ></FcFullTrash>
        </div>
      </li>
    </div>
  );
}

export default ExpenseItem;
