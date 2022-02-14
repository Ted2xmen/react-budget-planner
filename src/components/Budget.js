import {useContext} from 'react';
import vault from '../images/vault.svg'
import { AppContext } from '../context/AppContext';

function Budget() {

  const {budget } = useContext(AppContext);

  return (
    <div className='py-5 hover alert alert-secondary'>
     
     <img src={vault} height="100" alt="" />
      Bütçen:  {budget} TL </div>
  )
}

export default Budget