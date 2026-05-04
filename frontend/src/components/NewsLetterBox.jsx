import React from 'react'

const NewsLetterBox = () => {
  const onSubmitHandler = (event)=>{
      event.preventDefault();
  }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
          Join our community and be the first to discover new arrivals, exclusive offers, and style updates—straight to your inbox.
        </p>
        <form className='w-full sm:w-1/2  flex items-center gap-3 mx-auto my-6 border pl-3' onSubmit={onSubmitHandler} action="">
          <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
          <button 
  type="submit" 
  className="px-10 py-4 text-xs text-white tracking-wide
  bg-gradient-to-r from-emerald-800 to-teal-900/70
  hover:opacity-90 active:scale-95
  transition-all duration-300 rounded-md shadow-md">
  SUBSCRIBE
</button>
        </form>
    </div>

  )
}

export default NewsLetterBox