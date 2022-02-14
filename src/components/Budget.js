import {useContext} from 'react';
import { AppContext } from '../context/AppContext';

function Budget() {

  const {budget } = useContext(AppContext);

  return (
    <div className='alert alert-secondary'>Bütçen:  {budget} TL </div>
  )
}

export default Budget