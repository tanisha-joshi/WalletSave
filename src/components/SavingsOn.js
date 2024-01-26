import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSavings } from '../redux/reducer'
import { SET_SAVING } from '../redux/reducer'

const SavingsOnOff = () => {
    const isSavings = useSelector(selectSavings)
    const dispatch=useDispatch()
  return (
    <>
    {
        
        <div role="alert" className="alert alert-info flex">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  {!isSavings && <div className='flex-2'>Activate The savings Feature</div>}
   
  <button onClick={()=>{}} className="btn btn-primary">Activate</button>
 </div>
    }
    </>
  )
}

export default SavingsOnOff