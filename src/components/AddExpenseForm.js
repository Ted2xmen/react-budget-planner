import { useContext , useState} from "react";
import {AppContext} from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

function AddExpenseForm() {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    // alert('name: ' + name + 'cost: ' + cost);

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    }

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    })
    
    

  }

  return (
    <form onSubmit={onSubmit}>
      <div className="row mt-3">
        <div className="col-sm">
          <label htmlFor="name">Name </label>
          <input
            type="text"
            required="required"
            id="name"
            className="form-control"
            onChange={(event) => setName(event.target.value) }
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost Value </label>
          <input
            type="text"
            required="required"
            id="cost"
            className="form-control"
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
        <div className="col-sm gap-3 mt-3 d-flex justify-content-start align-items-end">
          <button type="submit" className="btn btn-primary px-5">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddExpenseForm;
