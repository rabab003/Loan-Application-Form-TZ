// import React, { useState } from 'react'
// import Modal  from './Modal'
// import MyInputComponent from './MyInputComponent'

// export default function Form({title}) {

// const [errorMessage,setErrorMessage ] = useState(null)
// const [showModal ,setShowModal] = useState(false)
// const [dataForm, setDataForm] = useState({
//         name: '',
//         phoneNumber: '',
//         age: '',
//         sit: false,
//         salary: '',
// });

// const submitActive = dataForm.name == "" || dataForm.age == "" || dataForm.phoneNumber == "";

// function handleFormSubmit(event) {
//         event.preventDefault();
//         setErrorMessage(null)
//         const {age ,phoneNumber} =dataForm;
//         if(age<18 || age >100){
//             setErrorMessage("the age is not allowed")
//         }else if(phoneNumber.length < 10 || phoneNumber.length > 12){
//         setErrorMessage ("phone is not correct")
//         }
//         setShowModal(true)
// }
// function handelChecked(eve) {
//     setDataForm({...dataForm, sit: eve.target.checked});
// }

// function hideTheModal(){        
//     if(showModal){
//         setShowModal(false)
// }
// }

// return (
//         <div className='flex items-center justify-center flex-col w-full h-full' onClick={hideTheModal}>
//             {title}
//             <form className='flex items-center w-full justify-center flex-col py-12'>

//                 <MyInputComponent handelChange={setDataForm} currentInput={dataForm} value={dataForm.name}/>
//                 {/* <div className='flex flex-col text-center my-3'>
//                     <label className='font-semibold text-[#757185]'>Name :</label>
//                     <input 
//                         value={dataForm.name} 
//                         onChange={(eve) => setDataForm({...dataForm, name: eve.target.value})} 
//                         type="text" 
//                         className='rounded-2xl bg-amber-50 outline-none py-1 px-3' 
//                     />
//                 </div> */}
//                 <div className='flex flex-col text-center my-3'>
//                     <label className='font-semibold text-[#757185]'>Phone Number :</label>
//                     <input 
//                         value={dataForm.phoneNumber} 
//                         onChange={(eve) => setDataForm({...dataForm, phoneNumber: eve.target.value})} 
//                         type="tel" 
//                         className='rounded-2xl bg-amber-50 outline-none py-1 px-3 w-full' 
//                     />
//                 </div>
//                 <div className='flex flex-col text-center my-3'>
//                     <label className='font-semibold text-[#757185]'>Age :</label>
//                     <input 
//                         value={dataForm.age} 
//                         onChange={(eve) => setDataForm({...dataForm, age: eve.target.value})} 
//                         type="number" 
//                         className='rounded-2xl bg-amber-50 outline-none py-1 px-3 w-full' 
//                     />
//                 </div>
//                 <div>
//                     <label className='font-semibold text-[#757185]'>Are you employee :</label>
//                     <input 
//                         name='employee' 
//                         type="checkbox" 
//                         checked={dataForm.sit} 
//                         onChange={handelChecked} 
//                     />
//                 </div>
//                 <div className='py-3'>
//                     <label>Salary :</label>
//                     <select 
//                         value={dataForm.salary} 
//                         onChange={(eve) => setDataForm({...dataForm, salary: eve.target.value})}
//                     >
//                         <option>Less than 500$</option>
//                         <option>only 500$</option>
//                         <option>More than 500$</option>
//                     </select>
//                 </div>
//                 <button onClick={handleFormSubmit} className={`text-white py-1 px-6 rounded-2xl 
//                 ${submitActive ? "bg-amber-300": "bg-emerald-500"}`} 
//                 disabled={submitActive} >
//                     sub
//                 </button>
//             </form>
            
//             <Modal errorMsg={errorMessage} isVisible={showModal}
//             />

//         </div>
//     )
// }


import React, { useState } from 'react'
import Modal  from './Modal'
import MyInputComponent from './MyInputComponent'

export default function Form({title}) {

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
            {title}
            <form className='flex items-center w-full justify-center flex-col py-12'>

                <MyInputComponent 
                inputName="name:"
                handelChange={handelCheckNameInput} 
                value={dataForm.name}/>

                <MyInputComponent 
                inputName="phoneNumber:"
                handelChange={handelCheckMobileNumberInput} 
                value={dataForm.phoneNumber}/>
   
               
                {/* <div className='flex flex-col text-center my-3'>
                    <label className='font-semibold text-[#757185]'>Age :</label>
                    <input 
                        value={dataForm.age} 
                        onChange={(eve) => setDataForm({...dataForm, age: eve.target.value})} 
                        type="number" 
                        className='rounded-2xl bg-amber-50 outline-none py-1 px-3 w-full' 
                    />
                </div> */}

                <MyInputComponent
                inputName="Age:"
                value={dataForm.age}
                handelChange={handelCheckAgeInput}
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
