import React from 'react'

function Home() {
  return (
    <div className="  h-full overflow-hidden bg-cyan-900 text-slate-400 flex flex-col text-center items-center">
        <div className="font-extrabold tracking-wider mt-48 text-3xl ">Welcome back!</div>
        <div className="font-medium text-slate-500 mt-2">The decentralised web awaits</div>
        {/* <input type="text" placeholder="Enter your password" className="input input-bordered input-info w-full max-w-xs mt-10 border-none text-center" /> */}
        <div className="text-xs mt-5"><div className="font-bold mb-3">YOUR ADDRESS:</div>0x063c849623f7113776a7D2e173A6cac2930f96c9</div>
        <button className="btn btn-primary w-72 bg-slate-950 text-slate-400 border-none mt-10 ">Get Started</button>
        <button className="btn btn-primary w-72 bg-slate-950 text-slate-400 border-none mt-5 ">Create your wallet</button>
    </div>
  )
}

export default Home