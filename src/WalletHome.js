import React from 'react'

function WalletHome() {
  return (
    <div className="w-full h-full bg-cyan-900 flex flex-col items-center">
        <div className="w-full h-20 bg-slate-900 shadow-2xl rounded-b-sm shadow-slate-700 flex flex-row items-center justify-around">
            <div className="text-slate-500 font-bold text-xl">Account1</div>
        </div>
        <div className="bg-slate-900 text-xsm font-xsm mt-8 w-44 h-9 rounded-l-3xl rounded-r-3xl pt-2 font-medium pb-1 pl-2 pr-2 overflow-clip text-center align-middle">0x063c849623f7113776a7D2e173A6cac2930f96c9</div>
    </div>
  )
}

export default WalletHome