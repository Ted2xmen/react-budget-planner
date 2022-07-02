import { useContext, useState } from "react";
import vault from "../images/vault.svg";
import { AppContext } from "../context/AppContext";

function Budget() {
  const { budget, dispatch } = useContext(AppContext);

  const [value, setValue] = useState();

  const [toggle, setToggle] = useState(false);

  const toggleBudget = () => {
    setToggle(!toggle);
  };

  return (
    <div className="py-5 hover alert alert-success">
      <img src={vault} height="100" alt="vault" />
      <span>Bütçen: {budget} TL</span>
      <button onClick={toggleBudget}>Edit</button>
      <div className={`float-end ${toggle ? "" : "d-none"}`}>
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="number"
        />
        <button
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

      <div></div>
    </div>
  );
}

export default Budget;
