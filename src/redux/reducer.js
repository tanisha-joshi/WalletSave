import { createSlice } from "@reduxjs/toolkit";
import { CHAINS_CONFIG,goerli,mainnet } from "../utils/Chains";
const initialState = {
    chain :CHAINS_CONFIG[goerli.chainId],
    account:null,
    seedPhrase:""
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

        }




    }
 }


 )



 export const {SET_ACCOUNT,SET_CHAIN} = Slice.actions
 export const selectAccount = (state)=>state.data.account
 export const selectChain= (state)=>state.data.chain
 export const selectPhrase= (state)=>state.data.seedPhrase

 export default Slice.reducer