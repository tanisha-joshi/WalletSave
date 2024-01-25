import logo from './logo.svg';
import Home from './Home';
import CreateWallet from './CreateWallet';
import WalletHome from './WalletHome';
import Finish from './Finish';
import SendHome from './SendHome'

function App() {
  return (
    <div className="App h-500 bg-white">
      {/* <WalletHome /> */}
      {/* <Home /> */}
      {/* <CreateWallet seedphrase={"palm shiver eager merge solve hard master foot produce bulb zebra hockey"} /> */}
      {/* <Finish address= {"0x5A0dFfe964188E62C1acc3C6a032D9cC57B1CfC9"} /> */}
      <SendHome />
    </div>
  );
}

export default App;
