import React from 'react'

function CreateWallet() {
  return (
    <div className=" w-full bg-slate-800 h-full flex flex-col items-center">
        <ul className="steps mt-4 text-xs">
            <li className="step step-primary">Secure Wallet</li>
            <li className="step step-primary">Confirm Secret Recovery Phrase</li>
            <li className="step">Finish</li>
        </ul>
        <div className="font-extrabold mt-10 text-2xl ">Write down your Secret Recovery Phrase</div>
        <div className="font-medium text-slate-500 mt-6 text-sm">Write down this Secret Recovery Phrase and save it in a place that you trust and only you can access</div>
        <div className="bg-slate-400 mt-14 text-slate-600 pt-4 pb-4 pl-2 pr-2 font-bold rounded-lg">moral middle of the town ant lost there</div>
        <button className="btn w-1/2 btn-primary bg-slate-950 text-slate-400 border-none mt-14 ">Next</button>

    </div>
  )
}

export default CreateWallet