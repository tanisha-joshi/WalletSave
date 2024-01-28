import React, { useEffect } from "react";
import Navbar from "./Navbar";
import img1 from "./assets/MainCircle.png";
import CreateSavings from "./components/CreateSavings";
import {useSelector} from "react-redux"
import { selectAccount, selectSavings } from "./redux/reducer";
import SavingPageInfo from "./components/SavingPageInfo";
import { getMyAddress } from "./utils/transactionUtils";
const SavingsPage = () => {
  const isSaving = useSelector(selectSavings)
  
  return (
    <>
    {!isSaving&&  <CreateSavings/>}
    {isSaving && <SavingPageInfo/> }
    </>
  );
};

export default SavingsPage;
