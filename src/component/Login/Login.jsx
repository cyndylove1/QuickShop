import React from 'react'
import { useState } from 'react'
import logo from '../Images/cN1g46Vw_400x400.png'


const Login = () => {
    const [type,setType] = useState("password")
    const [icon,setIcon] = useState('Show')

    const handleToggle = ()=>{
        if(type==="password"){
            setIcon('Hide')
            setType('text')
        }else{
            setIcon('Show')
            setType('password')
        }
        
    }
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
            <div className='pt-10 pb-6 text-2xl font-medium text-center'>
                <h2>Login in to you account </h2>
            
            </div>
            <form action="" className='mx-43'>
                
                <div>
                    <div className='px-10 pt-10'>
                        <b><label htmlFor="Email Address">Your Email Address</label><br /></b>
                        <input type="text" name="" id="" placeholder=' Your Email Address' className=' border-1 border-gray w-100 h-22 px-2 mt-2 bg-white rounded-lg outline-none' />
                    </div>
                    <div className=' px-10 pt-10'>
                        <div className=''>
                            <div>
                                <b><label htmlFor="Phone Number">Password</label><br /></b>
                                <input  type={type} name="" id="" placeholder='Your Password' className=' border-1 border-gray w-100 h-22 px-2 mt-2 bg-white rounded-lg outline-none'/>
                            </div>
                            
                            <div className='ml-45 text-red -mt-10 underline cursor-pointer'>
                                <span onClick={handleToggle}>{icon}</span>
                            </div>
                            <div className='flex justify-end pt-6 pb-10'>
                                <h2 className='text-sm'>Forgot Password? <span className='text-red underline'>Reset it Here</span></h2>
                            </div>
                            

                        </div>
                        <div className='w-100 py-3 mt-10 mb-32 text-center bg-orange-300 rounded-lg'> 
                            <button className='font-medium text-white'>Log In</button>
                        </div>
                       
                    </div>
                    
                </div>

       
                        
                        
                    
                
            </form>

        </div>
    </div>
  )
}

export default Login
