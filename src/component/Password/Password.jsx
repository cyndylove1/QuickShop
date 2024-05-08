import React from 'react'
import { useState } from 'react'
import logo from '../Images/cN1g46Vw_400x400.png'

const Password = () => {
    const [type,setType] = useState("password")
    const [icon,setIcon] = useState('Show')
    const [visible,setVisible] = useState("password")
    const [password,setPassword] = useState('Show')

    const handleToggle = ()=>{
        if(type ==="password"){
            setIcon('Hide')
            setType('text')
        }else{
            setIcon('Show')
            setType('password')
        }
        
    }
    const handleChange = ()=>{
        if(visible ==="password"){
            setPassword('Hide')
            setVisible('text')
        }else{
            setPassword('Show')
            setVisible('password')
        }
        
    }
  return (
    <div>
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
            <div className=' mx-51 pt-10'>
                <h2 className='text-2xl font-medium'>Set a new password</h2>
                <p className='py-2 pb-10'>Enter a safe password below.</p>
            </div>
            <form action="" className='mx-43'>
                <div>
                    <div>
                        <b><label htmlFor="Phone Number">New Password</label><br /></b>
                        <input  type={type} name="" id="" placeholder='Your Password' className=' border-1 border-gray w-62 h-22 px-2 mt-2 bg-white rounded-lg outline-none'/>
                    </div>
                                
                    <div className='ml-45 text-red -mt-10 underline cursor-pointer'>
                        <span onClick={handleToggle}>{icon}</span>
                    </div>
                    
                </div>
                
                <div className='pt-10'>
                    <b><label htmlFor="Phone Number">New Password Again?</label><br /></b>
                    <input  type={visible} name="" id="" placeholder='Your Password' className=' border-1 border-gray w-62 h-22 px-2 mt-2 bg-white rounded-lg outline-none'/>
                </div>
                            
                <div className='ml-45 text-red -mt-10 underline cursor-pointer'>
                    <span onClick={handleChange}>{password}</span>
                </div>
                <div className='w-62 flex justify-center py-3 mt-10 mb-32 text-center bg-orange-300 rounded-lg'>
                                    
                    <button className='font-medium text-white'>Continue</button>

                </div>

            </form>
        </div>
    </div>
  )
}

export default Password