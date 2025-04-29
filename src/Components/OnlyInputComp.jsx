import React from 'react'
import { useContext } from 'react'
import { LoanInputContext } from './LoanFormInputText'

export default function OnlyInputComp({value, handelChange, inputName}) {
  const inputContext = useContext(LoanInputContext)

  return (
    <div>
    <label className='font-semibold text-[#757185]'>{inputContext.labelTitle}</label>
      <input 
          className='rounded-2xl bg-amber-50 outline-none py-1 px-3 w-full' 
          value={inputContext.inputValue} 
          onChange={(event)=>{
            inputContext.handleChange(event.target.value)
          }}
        />
    </div>
  )
}
