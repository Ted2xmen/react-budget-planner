import {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import man from '../images/man.svg'

function Remaining() {
  const {expenses, budget} = useContext(AppContext); 

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses >= budget ? 'alert-danger' : 'alert-info';
  const alertMsg = totalExpenses < budget ? budget - totalExpenses + ' liran kaldı' : '  hiç paran kalmadı';

  return (
    <div className={`alert ${alertType} py-5 hover`}>
      <img src={man} height="100" alt="" className='me-2' />
       {alertMsg} </div>

  )
}

export default Remaining