import React from 'react'
import {useState} from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import Navbar from './Navbar';
function WalletHome() {
    const WalletAddressDisplay = ({ address }) => {
        const [isCopied, setIsCopied] = useState(false);
      
        const handleCopyClick = () => {
          // Create a temporary input element to copy the text to clipboard
          const tempInput = document.createElement('input');
          tempInput.value = address;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
      
          // Set the copied state to true and reset after a short delay
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1500);
        };
      
        return (
          <div
            style={{
              cursor: 'pointer',
              border: '1px solid #ccc',
              padding: '5px',
              borderRadius: '5px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              maxWidth: '200px',
            }}
            onClick={handleCopyClick}
          >
            {isCopied ? 'Address Copied!' : `${address.substring(0, 12)}...${address.substring(address.length - 8)}`}
          </div>
        );
      };
      
  return (
    <div className="w-full h-full bg-cyan-900 flex flex-col items-center">
        <Navbar/>
        <div className="mt-8">
        <WalletAddressDisplay className="" address="0x063c849623f7113776a7D2e173A6cac2930f96c9" />
        </div>
        <div className="mt-3 text-3xl tracking-wider shadow-2xl text-slate-400">0.0345 SepoliaETH</div>
        <div className="mt-2 text-xl tracking-wide shadow-2xl text-slate-500">$0.00 USD</div>
        <div className="flex flex-row p-3 h-11 w-full mt-7"><RiSendPlaneFill className="text-gray-900 w-9 h-9" /></div>
        <div role="tablist" className="tabs tabs-bordered mt-4 items-center">
            <input type="radio" name="my_tabs_1" role="tab" className="tab tracking-wide" aria-label="Tokens" />
            <div role="tabpanel" className="tab-content p-10">Tokens</div>

            <input type="radio" name="my_tabs_1" role="tab" className="tab tracking-wide" aria-label="NFTs" checked />
            <div role="tabpanel" className="tab-content p-10">NFTs</div>

            <input type="radio" name="my_tabs_1" role="tab" className="tab tracking-wide" aria-label="Activity" />
            <div role="tabpanel" className="tab-content p-10">Activity</div>
        </div>
        </div>
  )
}

export default WalletHome