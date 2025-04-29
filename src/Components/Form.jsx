import React, { useState } from 'react'
import Modal  from './Modal'
import MyInputComponent from './MyInputComponent'

import { LoanInputContext } from './LoanFormInputText'

export default function Form() {

const [errorMessage,setErrorMessage ] = useState(null)
const [showModal ,setShowModal] = useState(false)
const [dataForm, setDataForm] = useState({
        name: '',
        phoneNumber: '',
        age: '',
        sit: false,
        salary: '',
});

const submitActive = dataForm.name == "" || dataForm.age == "" || dataForm.phoneNumber == "";

function handleFormSubmit(event) {
    console.log(dataForm)
        event.preventDefault();
        setErrorMessage(null)
        const {age ,phoneNumber} =dataForm;
        if(age<18 || age >100){
            setErrorMessage("the age is not allowed")
        }else if(phoneNumber.length < 10 || phoneNumber.length > 12){
        setErrorMessage ("phone is not correct")
        }
        setShowModal(true)
}
function handelChecked(eve) {
    setDataForm({...dataForm, sit: eve.target.checked});
}

function handelCheckNameInput(value){
    setDataForm({...dataForm,name:value})

}

function handelCheckMobileNumberInput(value){
    setDataForm({...dataForm,phoneNumber:value})

}

function handelCheckAgeInput(value){
    setDataForm({...dataForm,age:value})

}

function hideTheModal(){        
    if(showModal){
    setShowModal(false)
}
}

return (
        <div className='flex items-center justify-center flex-col w-full h-full mx-3' onClick={hideTheModal}>
            <form className='flex items-center w-full justify-center flex-col py-12'>



                <LoanInputContext.Provider value={{
                    value: LoanInputContext.name, 
                    handleChange:handelCheckNameInput,
                    labelTitle:"name"
                }}>
                <MyInputComponent/>
                </LoanInputContext.Provider>



                <LoanInputContext.Provider value={{
                    value:LoanInputContext.phoneNumber,
                    handleChange:handelCheckMobileNumberInput,
                    labelTitle:"phoneNumber"
                }}>
               <MyInputComponent/>   
            </LoanInputContext.Provider>
 
   
                <MyInputComponent inputName="Age:"
                value={dataForm.age} handelChange={handelCheckAgeInput}
                />

                <div>
                    <label className='font-semibold text-[#757185]'>Are you employee :</label>
                    <input 
                        name='employee' 
                        type="checkbox" 
                        checked={dataForm.sit} 
                        onChange={handelChecked} 
                    />
                </div>

                <div className='py-3'>
                    <label>Salary :</label>
                    <select 
                        value={dataForm.salary} 
                        onChange={(eve) => setDataForm({...dataForm, salary: eve.target.value})}
                    >
                        <option>Less than 500$</option>
                        <option>only 500$</option>
                        <option>More than 500$</option>
                    </select>
                </div>

                <button onClick={handleFormSubmit} className={`text-white py-1 px-6 rounded-2xl 
                ${submitActive ? "bg-amber-300": "bg-emerald-500"}`} 
                disabled={submitActive} >
                    sub
                </button>
            </form>
            
            <Modal errorMsg={errorMessage} isVisible={showModal}
            />

        </div>
    )
}