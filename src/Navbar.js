import React from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BiSolidUserAccount } from "react-icons/bi";
function Navbar() {
  return (
    <div className="w-full h-20 bg-slate-900 mix-blend-darken shadow-2xl rounded-b-sm shadow-slate-700 flex flex-row items-center p-1">
            <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 bg-slate-900 border-none"><IoIosArrowDropdownCircle className="w-7 h-7" /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="h-11 text-slate-300">Select a network</li>
                        <li><a>Ethereum Mainnet</a></li>
                        <li><a>Sepolia</a></li>
                    </ul>
            </div>
            <BiSolidUserAccount className="ml-12 w-6 h-6"/>
            <div className="text-slate-300 font-bold text-xl ml-3">Account1</div>
        </div>
  )
}

export default Navbar