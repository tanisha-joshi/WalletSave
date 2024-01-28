import { createSlice } from "@reduxjs/toolkit";
import { CHAINS_CONFIG,goerli,mainnet } from "../utils/Chains";
const initialState = {
    chain :CHAINS_CONFIG[goerli.chainId],
    account:null,
    seedPhrase:"",
    isSaving:null,
    savingsAccount:null
}


export const Slice = createSlice({
    name:"data",
    initialState:initialState,
    reducers:{
        SET_ACCOUNT:(state,action)=>{
            return {
                ...state,
                ...action.payload
                
            }

        },
        SET_CHAIN:(state,action)=>{
            return {
                ...state,
                ...action.payload
            }

        },
        SET_SAVING:(state,action)=>{
            console.log(action.payload)
            state.isSaving= action.payload
            
        },
        SET_SAVINGS_ACCOUNT :(state,action)=>{
            return {
                ...state,
                ...action.payload
            }

        }




    }
 }


 )



 export const {SET_ACCOUNT,SET_CHAIN,SET_SAVING} = Slice.actions
 export const selectAccount = (state)=>state.data.account
 export const selectChain= (state)=>state.data.chain
 export const selectPhrase= (state)=>state.data.seedPhrase
 export const selectSavings = (state)=>state.data.isSaving
 export default Slice.reducer