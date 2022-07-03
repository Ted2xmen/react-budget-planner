import {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import wallet from '../images/wallet.svg';


function ExpenseTotal() {

  const {expenses, currency, budget} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item)=> {
    return (total += item.cost);
  }, 0);

  const alertType = totalExpenses >= budget ? 'alert-danger' : 'alert-info';

  return (
    <div className={`alert ${alertType} py-5 hover`}> 
    <img src={wallet} height="100" alt="" />
    {totalExpenses} {currency} harcadın </div>

  )
}

export default ExpenseTotal