import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar'
import img1 from '../assets/MainCircle.png'
import ToastSuccess from './ToastSuccess'
import { SET_SAVING, selectAccount, selectSavings } from "../redux/reducer";
import {  useDispatch, useSelector } from 'react-redux';
import { getMyAddress,startSave } from "../utils/transactionUtils";
const CreateSavings = () => {

    const [isLoading,setIsLoading] = useState()
    const dispatch=useDispatch()
    const account=useSelector(selectAccount)
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
  
    const handleCreate = async ()=>{
      setIsLoading(true)
      await delay(1000)
      if(account){
        
        const savingAddress=getMyAddress(account.privateKey)
        {
         
          startSave(account.privateKey).then(
          (result)=>{
            console.log(result)
         if(result)
         {
           dispatch(SET_SAVING(true))
           console.log("account created successfully")
         }
          }
         ).catch(
           (error)=>{
            console.log(error)
            alert(error)

           }
         )
         
         
         setIsLoading(false)
        }
        
        
      }
        
    }

    
  return (
    <div style={{background: 'var(--Greyscale-Grey-80, #1C1C23)'}} className="h-full">
        <Navbar />
        <div className="">
          <img
          className="h-[50%]"
            src={img1}
          />
        </div>
       {
        !isLoading && 
        <div>
       <div style={{background: 'var(--Greyscale-Grey-80, #1C1C23)'}} className="mt-5 text-center font-[patua] font-bold  w-[80%] m-[auto] text-[28px] text-[#fdfdfd]">
          Activate Your Savings Account{" "}
        </div>
        <div className="flex">
          <button onClick={handleCreate} className="btn mt-3 m-auto bg-[#ff6400] text-[#ffe2d0] rounded-full" >Activate</button>
        </div>
       </div>
       }
       {
        isLoading && 
        <div className='flex justify-center items-center flex-col h-[230px]'>
            <div className=''>Creating Your account...</div>
            <span className="bg-yellow-200 loading loading-infinity w-[4rem]"></span>
        </div>
       }
       
      </div>
  )
}

export default CreateSavings