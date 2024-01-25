import React from 'react'

function Finish() {
  return (
    <div className="w-full bg-slate-800 h-full flex flex-col items-center">
        <div className="font-bold text-slate-500 mt-24 text-2xl">Your Wallet has been created</div>
        <div className="text-xs mt-14"><div className="font-bold mb-3">YOUR ADDRESS:</div>0x063c849623f7113776a7D2e173A6cac2930f96c9</div>
        <button className="btn btn-primary w-72 bg-slate-950 text-slate-400 border-none mt-10 ">Continue to WalletSave</button>
    </div>
  )
}

export default Finish