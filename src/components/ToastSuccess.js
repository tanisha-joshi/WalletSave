import React, { useEffect,useState } from 'react'

const ToastSuccess = ({message,type}) => {
  const [visible,setVisible]=useState(false)
  useEffect(()=>{
    if(visible)
    {
      const openToast= setTimeout(()=>{
        setVisible(false)
      },3000)
      clearTimeout(openToast)
    }
  },[])
  return (
   <>
    <div className="mt-[60px] toast toast-top toast-start ">
  <div className={`alert alert-${type}`}>
    <span>{message}</span>
  </div>
</div>
   </>
  )
}

export default ToastSuccess