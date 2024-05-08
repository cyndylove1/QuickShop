import React from 'react'
import logo from '../Images/cN1g46Vw_400x400.png'

const Forgot = () => {
  return (
    <div>
        <div>
            <div className='flex items-center justify-between mx-24 mt-4'>
                <div>
                    <div className=''><img src={logo} alt="" className='inline-block w-10'/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2></div>
                </div>
                <div>
                    <button className='text-red px-10 py-2 font-medium bg-orange-100 rounded-lg'>Create a Store</button>
                </div>
            </div>
        </div>
        <div>
            <div className='pt-20 text-center'>
                <h2 className='text-2xl font-medium'>Forgot Password?</h2>
                <p className='pt-2'>Enter your email address and we will send you a link <br /> to reset your password.</p>
            </div>
        </div>
        <form action="" className='mx-43'>
            <div className='px-10 pt-10'>
                <b><label htmlFor="Email Address">Your Email Address</label><br /></b>
                <input type="text" name="" id="" placeholder=' Your Email Address' className=' border-1 border-gray w-100 h-22 px-2 mt-2 bg-white rounded-lg outline-none' />
            </div>
            <div className='w-62 flex justify-center py-3 mx-10 mt-10 text-center bg-orange-300 rounded-lg'>
                                    
                <button className='font-medium text-white'>Continue</button>

            </div>
            <h6 className='py-4 text-sm text-center'>Go Back to Log In</h6>
            
            
        </form>
        
    </div>
  )
}

export default Forgot