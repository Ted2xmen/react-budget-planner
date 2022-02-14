import {useContext} from 'react';
import {AppContext} from '../context/AppContext';

function Remaining() {
  const {expenses, budget} = useContext(AppContext); 

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses >= budget ? 'alert-danger' : 'alert-success';
  const alertMsg = totalExpenses < budget ? budget - totalExpenses + ' liran kaldı' : 'hiç paran kalmadı';

  return (
    <div className={`alert ${alertType}`}> {alertMsg} </div>

  )
}

export default Remaining