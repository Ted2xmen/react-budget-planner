import React from 'react'
import header from '../images/header.svg'

function Header() {
  return (
   <div className='row p-5 d-flex justify-content-between '>
      <div className="col-sm-8 mt-5 ">
       <span className='header-text gradient'>BUDGET PLANNER</span>
     </div>
    
     <div className="col-sm-4 justify-content-end">
         <img src={header} width="300" alt="" />
     </div>
   </div>

  )
}

export default Header