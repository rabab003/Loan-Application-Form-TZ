import React from 'react'

export default function MyInputComponent({value, handelChange, inputName}) {
  return (
    <>
<div className='flex flex-col text-center my-3'>
      <label className='font-semibold text-[#757185]'>{inputName}</label>
      <input 

          value={value} 
          onChange={(event)=>{
            handelChange(event.target.value)
          }}
        />
</div>
      
    </>
  )
}
