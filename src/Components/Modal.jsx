import React from 'react'

export default function Modal({isVisible, errorMsg=null}) {
  if (isVisible){
  return (
    <div>
        <h2 className={`text-3xl font-semibold  text-emerald-600 ${errorMsg ?"text-red-400" : "bg-green-200" }`}>
        {errorMsg != null ? errorMsg : "correct"} 
     </h2>
    </div>
  );
  } else{
    return <></>
  }

}


