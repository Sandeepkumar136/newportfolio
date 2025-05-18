import React from 'react'
import { useAlert } from '../context/AlertDialogueContext';

const MoreInfo = () => {
  const {isAlertOpen, closeAlert} = useAlert();

  const handleAlert = ()=>{
    closeAlert();
  }

  return (
    <div>
      {
        isAlertOpen && (
        <>
         <div className="alert=container">
          <i onClick={handleAlert} className="bx bx-x"></i>
         </div> 
         <div className="alert-contain">
          Alet
         </div>
        </>
        )
      }
    </div>
  )
}

export default MoreInfo;
