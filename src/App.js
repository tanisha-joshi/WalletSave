import logo from './logo.svg';
import Home from './Home';
import CreateWallet from './CreateWallet';
import WalletHome from './WalletHome';
import Finish from './Finish';
import {  useDispatch, useSelector } from "react-redux";
import { SET_ACCOUNT, selectAccount, selectChain,SET_SAVING } from './redux/reducer';
import { useEffect } from 'react';
import { generateAccount } from './utils/accountUtils';
import Onboard from './Onboard';
import SendHome from './SendHome'
import Amount from './Amount';
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import Savings from './SavingsPage'
import { getMyAddress } from './utils/transactionUtils';


function App() {

  
  const account = useSelector(selectAccount)
  const chain = useSelector(selectChain)
  const dispatch = useDispatch()
  function isValidEthAddress(address) {
    if (!/^(0x)?[0-9a-fA-F]{40}$/.test(address)) {
      // Check if it has the right length and consists of valid hexadecimal characters
      return false;
    } else if (/^(0x)?[0]{40}$|^(0x)?[fF]{40}$/.test(address)) {
      // Check if the address is not an empty or all-zero address
      return false;
    } else {
      return true;
    }
  }
  

  useEffect(
    ()=>{
      const phrase =  localStorage.getItem("phrase")
      if(phrase){
        const keys = generateAccount(phrase)
        dispatch(SET_ACCOUNT(keys))
      } 
      const getSavingAddress= async ()=>{  
        if (account ) {
          const savingAddress = await getMyAddress(account.privateKey);
          console.log('address',savingAddress)
          if (isValidEthAddress(savingAddress)) {
             dispatch(SET_SAVING(true))
             
               
          } else {
            dispatch(SET_SAVING(false));  
           
          }
        }
      }
      getSavingAddress()
    },[]
  )
  return (

    <Router>
    <div className="App h-500 bg-white">
    {/* <Amount/> */}
      <Routes>
          {!account && <Route path="/" element={<Onboard/>} />}
          {account && <Route path="/" element={<WalletHome/>} />}
           <Route path="/sendHome" element={<SendHome />} />
          <Route path="/amount" element={<Amount />} />
          <Route path="/savings" element={<Savings/>} />
      </Routes>
    </div>
    </Router>


  );
}

export default App;
