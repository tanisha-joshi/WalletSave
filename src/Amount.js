import React, { useState } from 'react'
import Navbar from './Navbar'
import { FaEthereum } from "react-icons/fa";
import { useNavigate,useLocation } from 'react-router-dom';
import { calculateSavingsAndRound } from './utils/helper';
import { deposit, sendToken } from './utils/transactionUtils';
import { useSelector } from 'react-redux';
import { selectAccount, selectSavingAddress, selectSavings } from './redux/reducer';
import { ToastContainer, toast } from 'react-toastify';

function Amount({senderAddress}) {

    const location = useLocation()
    const navigate=useNavigate();
    const isSaving=useSelector(selectSavings)
    const renderCancel=()=>{
    navigate('/');
  }
  const add = location.state.senderAddress
  const account = useSelector(selectAccount)
  const savingAddress = useSelector(selectSavingAddress)
  const[ amount,setAmount] = useState(0)
  const [amountInEth,setAmountInEth] = useState(0)
  const [saving,setSaving] = useState(0)
  const [savingInEth,setSavingInEth] = useState(0)
  const [round,setRound] = useState(0)
  const [roundInEth,setRoundInEth] = useState(0)

const calculateAmounts = async(a)=>{

    const res = await calculateSavingsAndRound(a)
    setAmount(res.
        transactionAmount)
    setSaving(res.
        savingsAmount
        )
    setSavingInEth(res.
        savingInEth)
    setRound(res.roundedTotalAmount)
    setRoundInEth(res.
        roundedInEth
        )
    

    

}

const sendTransactions = async()=>{
     let tx2
    const tx1 = await sendToken(amountInEth,add,account.privateKey)
    console.log("tx1",tx1.info)
    console.log("isSaving",isSaving)
    if(isSaving)
    {
         tx2 = await deposit(account.privateKey,savingInEth)
        console.log("tx2",tx2)
    }

    // if(tx1.info.error || tx2.info.error)
    // {
    //     toast.error(`${tx1.info.error.message}`)
       
    // }
   
}



  return (
    <div className="w-full text-[whitesmoke] h-full bg-[#0f0e1e] flex flex-col items-center">
        <Navbar />
        <ToastContainer position='top-left'/>
        <div className="w-full h-auto p-3 flex flex-col items-center">
        <div className="text-xl font-bold">Send</div>
        <div className=" w-full ml-2 mr-2 bg-transparent mt-2 rounded-lg  border-2 pt-3 pb-3 pl-2 pr-2 border-white flex flex-col items-start gap-1">
            <div className="text-sm text-cyan-300 font-bold">Account2</div>
            <div className="text-xsm text-slate-300">{location.state.senderAddress}</div>
        </div>
        <div className="w-full flex flex-row items-center mt-2">
            <div className=" text-cyan-300 font-semibold text-md p-4">Asset:</div>
            <div className=" w-full bg-transparent rounded-lg  border-2 pt-3 pb-3 pl-2 pr-2 border-white flex flex-row items-start gap-1">
            <FaEthereum className="w-9 h-9 text-cyan-300" />
            <div className="flex flex-col">
                <div className="text-sm text-slate-400 font-bold">ETH</div>
                <div className="text-xsm text-slate-300">Balance: {account.balance}ETH</div>
            </div>
        </div>
        </div>
        <div className="w-full flex flex-row items-center mt-2">
            <div className=" text-cyan-300 font-semibold text-md p-4">Amount:</div>
            <div className=" w-full bg-transparent rounded-lg  border-2 pt-3 pb-3 pl-2 pr-2 border-white flex flex-col items-start gap-1">
        
                <div className="text-sm border-b-white text-slate-400 font-bold flex flex-row gap-2"><input 
                 
                onChange={(e)=>{
                    
                    setAmountInEth(e.target.value)
                    calculateAmounts(e.target.value)
                    }} placeholder="0" className=" border-none  bg-transparent w-auto focus:bg-transparent focus:outline-none"></input>ETH</div>
                <div className="text-xsm text-slate-300">${amount} USD</div>
{ isSaving &&               <div className='flex items-center justify-between w-full'>
                    <div className="text-xsm text-slate-300">Saving(USD): </div>

                <div className="text-xsm text-slate-300">${saving} USD</div>
                </div>}
{  isSaving &&              <div className='flex items-center justify-between w-full'>
                <div className="text-xsm text-slate-300">Saving(ETH): </div>


                <div className="text-xsm text-slate-300">{savingInEth} ETH</div>
                </div>
}
{ isSaving &&               <div className='flex items-center justify-between w-full'>
                <div className="text-xsm text-slate-300">Total(USD): </div>

                <div className="text-xsm text-slate-300">${round} USD</div>
                </div>}

{ isSaving &&               <div className='flex items-center justify-between w-full'>
                <div className="text-xsm text-slate-300">Total(ETH): </div>

                <div className="text-xsm text-slate-300">{roundInEth} ETH</div>
                </div>}
        
        </div>
        </div>
        {/* <div className=" w-full ml-2 mr-2 bg-transparent mt-2 rounded-lg  border-2 pt-4 pb-4 pl-2 pr-2 border-bg-[#0f0e1e] flex flex-row items-start gap-3 justify-between">
            <div className="text-sm text-cyan-300 font-bold flex flex-col">
                <div className="flex flex-row gap-1"><div>Gas</div><div className="text-xsm text-slate-300 font-normal italic">(estimated)</div></div>
                <div className="text-slate-400">Likely in {'<'} 30s</div>
            </div>
            <div className="text-xsm text-slate-300 flex flex-col">
                <div>0.00000415 ETH</div>
                <div>Max fee: 0.00054371 ETH</div>

            </div>
        </div> */}
        <div className="divider mt-3 "></div>
        <div className=" flex flex-row justify-between gap-3">
            <button className="btn w-40 btn-primary bg-slate-950 text-white border-none rounded-l-full rounded-r-full " onClick={renderCancel}>Cancel</button>
            <button className="btn w-40 btn-primary  border-slate-900 border-2 text-slate-900 rounded-l-full rounded-r-full " onClick={sendTransactions}>Next</button>
        </div>
        
        </div>
    </div>
  )
}

export default Amount
