import React, { useState } from 'react'

export default function Form() {

    const [dataForm, setDataForm] =useState ({
        name:'',
        phoneNumber:'',
        age:'',
        sit:'',
        salary:'',
})

  return (
    <form onSubmit={(eve)=>{
        console.log(eve)
        console.log(dataForm)

    }} className='flex items-center justify-center  flex-col py-12'>

        <div className='flex flex-col text-center my-3'>
            <label htmlFor="" className='font-semibold text-[#757185]'>Name :</label>
            <input value={dataForm.name} onChange={(eve)=>{setDataForm({...dataForm, name:eve.target.value})}} type="text" className=' rounded-2xl bg-amber-50 outline-none py-1 px-3' />
        </div>
        
        <div className='flex flex-col text-center my-3'>
            <label htmlFor="" className='font-semibold text-[#757185]'>Phone Number :</label>
            <input type="" className=' rounded-2xl bg-amber-50 outline-none py-1 px-3' />
        </div>
        
        <div className='flex flex-col text-center my-3'>
            <label htmlFor="" className='font-semibold text-[#757185]'>Age :</label>
            <input type="number" className=' rounded-2xl bg-amber-50 outline-none py-1 px-3' />
        </div>
                
        <div>
        <label htmlFor="" className='font-semibold text-[#757185]'>Are you employee :</label>
        <input type="checkbox"/>
        </div>

        <div className='py-3'>
            <label htmlFor="">salary :</label>
            <select >
                <option>Less than 500$</option>
                <option>More than 500$</option>
            </select>
        </div>

        <button className='bg-[#9AA872] mb-5 cursor-pointer text-white px-8 py-1 rounded-sm'>Submit</button>
        
      
    </form>
  )
}
