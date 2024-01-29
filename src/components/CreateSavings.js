import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar'
import img1 from '../assets/MainCircle.png'
import ToastSuccess from './ToastSuccess'
import { SET_SAVING, selectAccount, selectSavings } from "../redux/reducer";
import {  useDispatch, useSelector } from 'react-redux';
import { getMyAddress,startSave } from "../utils/transactionUtils";
import { useNavigate } from 'react-router-dom';
const CreateSavings = () => {
    const navigate=useNavigate()
    const [isLoading,setIsLoading] = useState()
    const dispatch=useDispatch()
    const account=useSelector(selectAccount)
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
  
    const handleCreate = async ()=>{
      setIsLoading(true)
      
      if(account){
        
        const savingAddress=getMyAddress(account.privateKey)
        {
         
          startSave(account.privateKey).then(
          (result)=>{
            console.log(result)
         if(result)
         {
           alert("account created Successfully")
           navigate('/')
           console.log("account created successfully")
           
           setIsLoading(false)
         }
          }
         ).catch(
           (error)=>{
            console.log(error)
            alert(error)
            setIsLoading(false)
           }
         )
         
         
        
        }
        
        
      }
        
    }

    
  return (
    <div  className=" bg-[#0f0e1e]">
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
       <div  className="mt-5 text-center font-[patua] font-bold  w-[80%] m-[auto] text-[28px] text-[#fdfdfd]">
          Activate Your Savings Account{" "}
        </div>
        <div className="flex">
          <button onClick={handleCreate} className="btn my-3 mb-6 m-auto bg-[#ff6400] text-[#ffe2d0] rounded-full" >Activate</button>
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