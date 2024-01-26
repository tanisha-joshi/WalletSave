import logo from './logo.svg';
import Home from './Home';
import CreateWallet from './CreateWallet';
import WalletHome from './WalletHome';
import Finish from './Finish';
import {  useDispatch, useSelector } from "react-redux";
import { SET_ACCOUNT, selectAccount, selectChain } from './redux/reducer';
import { useEffect } from 'react';
import { generateAccount } from './utils/accountUtils';
import Onboard from './Onboard';
import SendHome from './SendHome'
import Amount from './Amount';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

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

    <Router>
    <div className="App h-500 bg-white">
      <Routes>
          {/* <Route path="/chatPage" element = {<ChatPage  socket={socket} />} />
          <Route path="/chat" element = {<Chat socket={socket} user={user} />} /> */}
          {!account && <Route path="/" element={<Onboard/>} />}
          {account && <Route path="/" element={<WalletHome/>} />}
           <Route path="/sendHome" element={<SendHome />} />
          <Route path="/amount" element={<Amount />} />
      </Routes>
      {/* <SendHome /> */}
      {/* <WalletHome/> */}
      {/* <Amount /> */}
    {/* {  !account && <Onboard/>}
     {account && <WalletHome />} */}
      {/* <CreateWallet seedphrase={"palm shiver eager merge solve hard master foot produce bulb zebra hockey"} />
      <Finish address= {"0x5A0dFfe964188E62C1acc3C6a032D9cC57B1CfC9"} /> */}
    </div>
    </Router>


  );
}

export default App;
