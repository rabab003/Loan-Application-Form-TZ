import React from 'react'
import OnlyInputComp from './OnlyInputComp'

export default function MyInputComponent({value, handelChange, inputName}) {


  return (
    <>
   <div className='flex flex-col text-center my-3'>
      <h2>this is the Header</h2>
   
   
      <OnlyInputComp/>
     
      
      <h2>this is the footer</h2>
   </div>
      
</>
  )
}
