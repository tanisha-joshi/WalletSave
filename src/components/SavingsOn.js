import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSavings } from '../redux/reducer'
import { SET_SAVING } from '../redux/reducer'
import {useNavigate} from 'react-router-dom'

const SavingsOnOff = () => {
    const isSavings = useSelector(selectSavings)
    console.log("savings",isSavings)
    const dispatch=useDispatch()
    const navigate = useNavigate()
  return (
    <>
    { !isSavings &&
       
        <div role="alert" className="alert h-[11%] alert-info gap-4 flex">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  { <div className='flex-2'>{!isSavings?"Activate Your Savings Account ":"Check Your Savings"}</div>}
   
  <button onClick={()=>{navigate('/savings')}} className="btn btn-sm h-[50%] text-[whitesmoke]  bg-[#4e2980]">{!isSavings?"Activate":"Info"}</button>
 </div>
    }
    </>
  )
}

export default SavingsOnOff