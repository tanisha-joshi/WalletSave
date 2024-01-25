import React, { useCallback, useEffect, useState } from 'react';
import { generateAccount } from './utils/accountUtils';



function Home() {
  const [seedphrase, setSeedphrase] = useState('');
  const create = ()=>{
    const keys = generateAccount()
    console.log(keys)
  }
  
  const importWallet = ()=>{
  
    const keys = generateAccount(seedphrase)
    console.log(keys)
  }


  function handleChange(event) {
    // Update the seedphrase state with the value from the text input
    setSeedphrase(event.target.value);
  }

  return (
    <div className="  h-full overflow-hidden bg-cyan-900 text-white flex flex-col text-center items-center">
        <div className="font-extrabold tracking-wider mt-48 text-3xl ">Welcome!</div>
        <div className="font-medium text-white mt-2">The decentralised web awaits</div>
        {/* <input type="text" placeholder="Enter your password" className="input input-bordered input-info w-full max-w-xs mt-10 border-none text-center" /> */}
        {/* <div className="text-xs mt-5"><div className="font-bold mb-3">YOUR ADDRESS:</div>0x063c849623f7113776a7D2e173A6cac2930f96c9</div> */}
        <button onClick={create} className="btn btn-primary w-72 bg-slate-950 text-white border-none mt-10 ">Create New wallet</button>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-primary w-72 bg-slate-950 text-white border-none mt-10 " onClick={()=>document.getElementById('my_modal_2').showModal()}>Import Wallet</button>
<dialog id="my_modal_2" className="modal">
  
  <div className="modal-box">
  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className='flex flex-col items-center space-y-4'>

    <h3 className="font-bold text-lg">Import Wallet</h3>
<input onChange={(e)=>handleChange(e)} className='input input-bordered w-full text-xs' placeholder='please enter your seed phrase
'></input>
<button onClick={importWallet} className='btn'>Import Account</button>
</div>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  )
}

export default Home