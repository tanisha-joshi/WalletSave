import React from 'react'

function Finish({address}) {
  return (
    <div className="w-full bg-slate-800 h-full flex flex-col items-center">
        <div className="font-bold text-white mt-24 text-2xl">Your Wallet has been created</div>
        <div className="text-xs mt-14"><div className="font-bold mb-3 text-white">YOUR ADDRESS:</div>{address}</div>
        <button className="btn btn-primary w-72 bg-slate-950 text-white border-none mt-10 ">Continue to WalletSave</button>
    </div>
  )
}

export default Finish