import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up')
  const onSubmitHandler = async (event)=>{
    event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState==='Sign Up'?<input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' name="" id="" required />:''}
      
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' name="" id="" required />
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='password' name="" id="" required />

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password</p>
        {
          currentState==='Login'
          ?<p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
          :
          <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login here</p>
        }
      </div>
      <button className="px-8 py-2 mt-4 text-sm text-white font-light tracking-wide
bg-gradient-to-r from-emerald-800 to-teal-900/70
hover:opacity-90 active:scale-95
transition-all duration-300 rounded-md shadow-sm">
  {currentState === 'Login' ? 'Login' : 'Sign Up'}
</button>
    </form>
  )
}

export default Login