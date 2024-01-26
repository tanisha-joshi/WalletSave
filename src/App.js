import logo from './logo.svg';
import Home from './Home';
import CreateWallet from './CreateWallet';
import WalletHome from './WalletHome';
import Finish from './Finish';
import {  useDispatch, useSelector } from "react-redux";
import { SET_ACCOUNT, selectAccount, selectChain } from './redux/reducer';
import { useEffect } from 'react';
import { generateAccount } from './utils/accountUtils';


function App() {

  
  const account = useSelector(selectAccount)
  const chain = useSelector(selectChain)
  const dispatch = useDispatch()
  useEffect(
    ()=>{
      const phrase =  localStorage.getItem("phrase")
      if(phrase){
        const keys = generateAccount(phrase)
        dispatch(SET_ACCOUNT(keys))
        
      }
      

    },[]
  )
  return (


    <div className="App h-500 bg-white">
    {  !account && <Home />}
     {account && <WalletHome />}
      {/* <CreateWallet seedphrase={"palm shiver eager merge solve hard master foot produce bulb zebra hockey"} />
      <Finish address= {"0x5A0dFfe964188E62C1acc3C6a032D9cC57B1CfC9"} /> */}
    </div>


  );
}

export default App;
