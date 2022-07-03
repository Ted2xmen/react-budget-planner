import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import vault from "../images/vault.svg";
import { FcLibrary } from "react-icons/fc";

function Budget() {

  const { budget, dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);

  const [value, setValue] = useState();
  const [toggle, setToggle] = useState(false);

  const [curren, setCurren] = useState();


  const toggleBudget = () => {
    setToggle(!toggle);
  };

const money = ["$", "€", "₺"];

  return (
    <div className="py-5 hover alert alert-success">
      <img
        src={vault}
        className="click"
        onClick={toggleBudget}
        height="100"
        alt="vault"
      />

      <span>
  
         {budget.toLocaleString("en-US")}
        <select className="m-1" onChange={(e) => {
          setCurren(
            dispatch({ type: "CHANGE_CURRENCY", payload: e.target.value })
          );
        }}>
          {money.map((curr, i) => (
            <option key={i}>
              {curr}
            </option>
          ))}
        </select>
      </span>
      {/* <button className="m-1 btn btn-sm" onClick={toggleBudget}>
        <FcDataConfiguration />
      </button> */}
      <div className={`float-end ${toggle ? "" : "d-none"}`}>
        <input
          placeholder={budget}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="number"
        />
        <button
          className="btn-sm m-1 btn-dark"
          onClick={() => {
            dispatch({
              type: "SET_BUDGET",
              payload: value,
            });
          }}
        >
          Güncelle
        </button>
      </div>
    </div>
  );
}

export default Budget;
