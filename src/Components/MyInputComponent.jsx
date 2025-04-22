import React from 'react'

export default function MyInputComponent({value, handelChange, inputName}) {
  return (
    <>
<div className='flex flex-col text-center my-3'>
      <label className='font-semibold text-[#757185]'>{inputName}</label>
      <input 
          className='rounded-2xl bg-amber-50 outline-none py-1 px-3 w-full' 
          value={value} 
          onChange={(event)=>{
            console.log(value)
            handelChange(event.target.value)
          }}
        />
</div>
      
    </>
  )
}
