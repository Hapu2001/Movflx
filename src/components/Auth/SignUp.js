import React,{useEffect, useState} from 'react'
import { FaFacebookF, } from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc'
import {auth, signUp } from '../../shared/firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
export default function SignUp(props) {

  const [form, setForm ] = useState({
    firstName:'',
    lastName:'',
    email:'',
    passwords:''
  })
  const [user, loading, error] = useAuthState(auth);
  const [formError,setFormErrors] = useState({})
  const navigate = useNavigate()
  const register =()=>{
    if(Object.keys(formError).length === 0){
      signUp(form.firstName, form.email, form.passwords)
      if(user){
        toast.success('Sign Up Successfully')
        navigate('/')
      }
    }
  }
  const validate = (values) =>{
    const errors = {};
    
    if( !values.firstName){
      errors.firstName= "FirstName is required!";
    }
    if( !values.lastName){
      errors.lastName= "LastName is required!";
    }
    if((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))){
      errors.email = "Invalid email!"
  }
    if(!values.email){
      errors.email = "Email is required!";
    }
    if(values.passwords.length < 6){
      errors.passwords = "Passwords must be at least 6 characters long!";
    }
    if(!values.passwords){
      errors.passwords = "Passwords are required!";
    }
   
    return errors;
  }
  const onSubmitForm =(e) =>{
    e.preventDefault()
    setFormErrors(validate(form))
  }
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setForm({...form, [name] :value})
  }
    useEffect(()=>{
      register()
    },[formError])
    console.log(user)
  return (
    <div className='fixed z-[3] left-1/2 -translate-x-1/2 w-full px-6 pt'>
    <div className='w-[500px] mx-auto mt-20 text-center'>
      <div>
        <p className='text-5xl'> <span className='text-yellow-color'>Create Account</span> </p> 
        <div className='flex justify-center my-5'>
          <p className='text-blue-900 px-3 py-3  bg-white border text-2xl rounded-full mx-1 hover:opacity-40'> <FaFacebookF /></p>
          <p className='px-3 py-3  bg-white border text-2xl rounded-full mx-1 hover:opacity-40'> <FcGoogle /></p> 
        </div>
        <p className='text-lg'>or use your account:</p>
      </div>
      <div>
        <form onSubmit={onSubmitForm}>
            <div className='my-5 flex justify-between'>
                <p><input className='bg-white text-black  border-2  px-5 py-4 border-solid rounded-md focus:border-yellow-color focus:border-2 focus:outline-none w-full'  placeholdertype='text' placeholder='First name'
                name='firstName'
                onChange={handleChange}    
                ></input>
                <p>{formError.firstName }</p>
                </p> 
                <p> <input className='bg-white text-black  border-2  px-5 py-4 border-solid rounded-md focus:border-yellow-color focus:border-2 focus:outline-none w-full' placeholder='Last name'
                name='lastName'
                onChange={handleChange}  
                ></input>  
                  <p>{formError.lastName }</p></p> 
            </div>
            <div className='my-5'>
              <input className='bg-white text-black  border-2  px-5 py-4 border-solid rounded-md focus:border-yellow-color focus:border-2 focus:outline-none w-full'  placeholdertype='text' placeholder='Email'
              name='email'
              onChange={handleChange}  
              ></input>  
               <p>{formError.email }</p>
            </div>  
            <div className='my-5'>
              <input className='bg-white text-black border-2   px-5 py-4 border-solid rounded-md focus:border-yellow-color focus:border-2 focus:outline-none  w-full' type='text' placeholder='Password'
              name='passwords' 
              onChange={handleChange}  
              ></input>  
              <p>{formError.passwords }</p>
            </div>  
            <div className='my-8' >
              <button type='submit' className='btn border-yellow-color' >SIGN UP</button>
            </div>
        </form>
      </div>
      <div className='flex justify-center text-lg'>
          <p>Already a member? </p>
          <p className='hover:cursor-pointer ml-3 text-yellow-color underline-offset-2 underline' onClick={()=>props.setShow(true)}>Sign In</p>
      </div>

    </div>
    </div>
  )
}
