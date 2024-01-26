import React, { useCallback, useEffect, useState } from 'react';
import Home from './Home';
import CreateWallet from './CreateWallet';
import Finish from './Finish';




function Onboard() {

  const [stage,setStage] = useState(0)
  const [account,setAccount] = useState(null)
 


  return (
    <div className=' h-full overflow-hidden bg-cyan-900 text-white flex flex-col text-center items-center'>

    {stage === 0 && <Home setStage={setStage} setAccount={setAccount}/>}
    {stage === 1 && <CreateWallet seedphrase={account?.seedPhrase} setStage={setStage}/>}
    {stage === 2 && <Finish account={account} />}
    
    </div>

  )
}

export default Onboard