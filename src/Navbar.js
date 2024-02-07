import React from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BiSolidUserAccount } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="w-full  h-20 bg-[#0e0d1c]  rounded-b-sm shadow-slate-700 flex flex-row justify-between items-center p-1">
            {/* <div className="w-[24%] dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 bg-slate-900 border-none"><IoIosArrowDropdownCircle className="w-7 h-7" /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="h-11 text-center font-bold text-slate-300">Select a network</li>
                        <li><a>Ethereum Mainnet</a></li>
                        <li><a>Sepolia</a></li>
                    </ul>
            </div> */}
            <div className='flex w-[50%] align-middle gap-2  justify-center items-center'>
            <BiSolidUserAccount className=" w-6 h-6"/>
            <div onClick={()=>{navigate('/')}} className="text-slate-300 font-bold text-xl ">Account1</div>
            </div>
            <div className='text-slate-300 font-bold text-md  w-[24%]'>
             <button onClick={()=>{navigate('/savings')}} className='btn btn-sm  text-[#edecf0] bg-[#4e2980]'>Savings</button>
            </div>
        </div>
        
  
  )
}

export default Navbar