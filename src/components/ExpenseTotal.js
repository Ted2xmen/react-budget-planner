import {useContext} from 'react';
import {AppContext} from '../context/AppContext';


function ExpenseTotal() {

  const {expenses, budget} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item)=> {
    return (total += item.cost);
  }, 0);

  const alertType = totalExpenses >= budget ? 'alert-info' : 'alert-success';

  return (
    <div className={`alert ${alertType}`}> {totalExpenses} lira harcadın </div>

  )
}

export default ExpenseTotal