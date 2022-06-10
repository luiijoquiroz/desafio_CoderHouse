
import './Toggle.css'
import { useState } from 'react'

const Toggle = ({setBannerState}) => {
   const [toggleState, setToggleState] = useState('toggle')
   
   const handleToggle = (e) => {
      
      if (e.target.className === 'toggle') {
         setToggleState('toggle active')
         setBannerState('banner active') 
      } else {
         setBannerState('banner') 
         setToggleState('toggle')   
         }
      
   }
   
   return (
      <div className={toggleState} onClick={handleToggle} ></div>
   )
}

export { Toggle }
