import React, { useState } from 'react'
import Navbar from './Navbar'
import { FaEthereum } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { calculateSavingsAndRound } from './utils/helper';
import { deposit, sendToken } from './utils/transactionUtils';
import { useSelector } from 'react-redux';
import { selectAccount, selectSavingAddress } from './redux/reducer';
function Amount() {


    const navigate=useNavigate();
    const renderCancel=()=>{
    navigate('/');
  }
  const add = "0xD7D98e76FcD14689F05e7fc19BAC465eC0fF4161"
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

    const tx1 = await sendToken(amountInEth,add,account.privateKey)
    const tx2 = await deposit(account.privateKey,savingInEth)
console.log(tx1,tx2)
}



  return (
    <div className="w-full h-full bg-slate-300 flex flex-col items-center">
        <Navbar />
        <div className="w-full h-auto p-3 flex flex-col items-center">
        <div className="text-xl font-bold text-slate-800">Send</div>
        <div className=" w-full ml-2 mr-2 bg-transparent mt-2 rounded-lg  border-2 pt-3 pb-3 pl-2 pr-2 border-slate-700 flex flex-col items-start gap-1">
            <div className="text-sm text-cyan-800 font-bold">Account2</div>
            <div className="text-xsm text-slate-600">0x063c849623f7113776a7D2e173A6cac2930f96c9</div>
        </div>
        <div className="w-full flex flex-row items-center mt-2">
            <div className=" text-cyan-800 font-semibold text-md p-4">Asset:</div>
            <div className=" w-full bg-transparent rounded-lg  border-2 pt-3 pb-3 pl-2 pr-2 border-slate-700 flex flex-row items-start gap-1">
            <FaEthereum className="w-9 h-9 text-cyan-800" />
            <div className="flex flex-col">
                <div className="text-sm text-slate-900 font-bold">ETH</div>
                <div className="text-xsm text-slate-600">Balance: 0 ETH</div>
            </div>
        </div>
        </div>
        <div className="w-full flex flex-row items-center mt-2">
            <div className=" text-cyan-800 font-semibold text-md p-4">Amount:</div>
            <div className=" w-full bg-transparent rounded-lg  border-2 pt-3 pb-3 pl-2 pr-2 border-slate-700 flex flex-col items-start gap-1">
        
                <div className="text-sm text-slate-900 font-bold flex flex-row gap-2"><input onChange={(e)=>{
                    
                    setAmountInEth(e.target.value)
                    calculateAmounts(e.target.value)
                    }} placeholder="0" className=" border-none bg-transparent w-auto focus:bg-transparent focus:outline-none"></input>ETH</div>
                <div className="text-xsm text-slate-600">${amount} USD</div>
                <div className="text-xsm text-slate-600">${saving} USD</div>
                <div className="text-xsm text-slate-600">{savingInEth} ETH</div>
                <div className="text-xsm text-slate-600">${round} USD</div>
                <div className="text-xsm text-slate-600">{roundInEth} ETH</div>
        
        </div>
        </div>
        <div className=" w-full ml-2 mr-2 bg-transparent mt-2 rounded-lg  border-2 pt-4 pb-4 pl-2 pr-2 border-slate-700 flex flex-row items-start gap-3 justify-between">
            <div className="text-sm text-cyan-800 font-bold flex flex-col">
                <div className="flex flex-row gap-1"><div>Gas</div><div className="text-xsm text-slate-700 font-normal italic">(estimated)</div></div>
                <div className="text-slate-800">Likely in {'<'} 30s</div>
            </div>
            <div className="text-xsm text-slate-600 flex flex-col">
                <div>0.00000415 ETH</div>
                <div>Max fee: 0.00054371 ETH</div>

            </div>
        </div>
        <div className="divider mt-16 "></div>
        <div className="flex flex-row justify-between gap-3">
            <button className="btn w-40 btn-primary bg-slate-950 text-white border-none rounded-l-full rounded-r-full " onClick={renderCancel}>Cancel</button>
            <button className="btn w-40 btn-primary bg-transparent  border-slate-900 border-2 text-slate-900 rounded-l-full rounded-r-full " onClick={sendTransactions}>Next</button>
        </div>
        </div>
    </div>
  )
}

export default Amount
