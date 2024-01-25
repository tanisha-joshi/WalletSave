import React from 'react'
import {useState} from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
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
        <div className="w-full h-20 bg-slate-900 mix-blend-darken shadow-2xl rounded-b-sm shadow-slate-700 flex flex-row items-center p-1">
            <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 bg-slate-900 border-none"><IoIosArrowDropdownCircle className="w-7 h-7" /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="h-11 text-slate-300">Select a network</li>
                        <li><a>Ethereum Mainnet</a></li>
                        <li><a>Sepolia</a></li>
                    </ul>
            </div>
            <div className="text-slate-300 font-bold text-xl ml-14">Account1</div>
        </div>
        <div className="mt-8">
        <WalletAddressDisplay className="" address="0x063c849623f7113776a7D2e173A6cac2930f96c9" />
        </div>
        <div className="mt-3 text-3xl tracking-wider shadow-2xl text-slate-400">0.0345 SepoliaETH</div>
    </div>
  )
}

export default WalletHome