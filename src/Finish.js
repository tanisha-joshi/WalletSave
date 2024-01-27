import React from 'react'
import { useDispatch } from 'react-redux'
import { SET_ACCOUNT } from './redux/reducer'

function Finish({account}) {
  const dispatch = useDispatch()
  const handle = ()=>{
    localStorage.setItem("phrase",account?.seedPhrase)
    dispatch(SET_ACCOUNT(account))
  }
  return (
    <div className="w-full bg-slate-800 h-full flex flex-col items-center">
        <ul className="steps mt-4 text-xs">
            <li className="step step-primary">Secure Wallet</li>
            <li className="step step-primary">Confirm Secret Recovery Phrase</li>
            <li className="step step-primary">Finish</li>
        </ul>
        <div className="font-bold text-white mt-24 text-2xl">Your Wallet has been created</div>
        <div className="text-xs mt-14"><div className="font-bold mb-3 text-white">YOUR ADDRESS:</div>{account?.account?.address}</div>
        <button onClick={handle} className="btn btn-primary w-72 bg-slate-950 text-white border-none mt-10 ">Continue to WalletSave</button>
    </div>
  )
}

export default Finish