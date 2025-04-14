import React, { useState } from 'react'
import Modal from './Modal';

export default function Form() {

    const [showModel, setShowModel]=useState(false)

const [dataForm, setDataForm] = useState ({
        name:'',
        phoneNumber:'',
        age:'',
        sit:false,
        salary:'',
})

function handleFormSubmit(event){
    event.preventDefault();
    alert("hii")
   }

function handelChecked(eve){
    return (
        setDataForm({...dataForm, sit:eve.target.checked})
    )
}    


const btnIsDisabled = dataForm.name=="" || dataForm.age == "" || dataForm.phoneNumber == ""
     

  return (
    <div>
    <form  className='flex items-center justify-center  flex-col py-12'>
        <div className='flex flex-col text-center my-3'>
            <label htmlFor="" className='font-semibold text-[#757185]'>Name :</label>
            <input value={dataForm.name} onChange={(eve)=>{setDataForm({...dataForm, name:eve.target.value})}} type="text" className=' rounded-2xl bg-amber-50 outline-none py-1 px-3' />
        </div>
        <div className='flex flex-col text-center my-3'>
            <label htmlFor="" className='font-semibold text-[#757185]'>Phone Number :</label>
            <input value={dataForm.phoneNumber} onChange={(eve)=> setDataForm({...dataForm, phoneNumber:eve.target.value})} type="" className=' rounded-2xl bg-amber-50 outline-none py-1 px-3' />
        </div>
        <div className='flex flex-col text-center my-3'>
            <label htmlFor="" className='font-semibold text-[#757185]'>Age :</label>
            <input value={dataForm.age} onChange={(eve)=> setDataForm({...dataForm, age:eve.target.value})} className=' rounded-2xl bg-amber-50 outline-none py-1 px-3' />
        </div>
        <div>
        <label htmlFor="" className='font-semibold text-[#757185]'>Are you employee :</label>
        <input name='employee' type="checkbox" checked={dataForm.sit} onChange={handelChecked} value={dataForm.sit} />
        </div>
        <div className='py-3'>
            <label htmlFor="">salary :</label>
            <select value={dataForm.salary} onChange={(eve)=>{setDataForm({...dataForm, salary:eve.target.value})}}>
                <option>Less than 500$</option>
                <option>only 500$</option>
                <option>More than 500$</option>
            </select>
        </div>
        <button disabled={btnIsDisabled} className={`text-black ${btnIsDisabled ? "bg-red-300" : "bg-fuchsia-800"}` } onClick={handleFormSubmit()}>submit</button>
    </form>
    <Modal isVisible={}/>        
    </div>

    

  )
}
