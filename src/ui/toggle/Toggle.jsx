
import './Toggle.css'
import { useState } from 'react'

const Toggle = ( {setState} ) => {
   const [toggleState, setToggleState] = useState('toggle')
   
   const handleToggle = (e) => {
      e.preventDefault();
      if (e.target.className === 'toggle') {
         setState('active')
         setToggleState(toggleState + ' active')  
      } else {
         setToggleState('toggle')  
         setState('')
      }
   }
  
 
   return (
      <div className={toggleState} onClick={handleToggle} ></div>
   )
}

export { Toggle }
