import React from 'react'
import logo from '../Images/cN1g46Vw_400x400.png'
import { useState } from 'react'

const SignUp = () => {

    
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
       
        <div className='flex items-center justify-between mx-24 mt-4'>
            <div>
                <div className=''><img src={logo} alt="" className='inline-block w-10'/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2></div>
            </div>
            <div>
                <button className='text-red px-10 py-2 font-medium bg-orange-100 rounded-lg'>Login</button>
            </div>
        </div>
        <div className='pt-20 pb-6 text-2xl font-medium text-center'>
            <h2>Let's get you Started 👋 </h2>
        
            
        </div>
        <div>
            <form action="" className='mx-43'>
                <div className=' flex px-10 pt-10'>
                    <div className='w-99'>
                        <b><label htmlFor="First Name" > Your First Name</label><br /></b>
                        <input type="text" placeholder=' Your First Name' className=' border-1 border-gray h-22 w-100 px-2 mt-2 bg-white rounded-lg outline-none' />

                    </div>
                    <div className='w-99 pl-4'>
                        <b><label htmlFor="Last Name"> Your Last Name</label><br /></b>
                        <input type="text" placeholder=' Your Last Name' className=' border-1 border-gray w-100 h-22 px-2 mt-2 bg-white rounded-lg outline-none' />
                        {/* <input type="text" placeholder=' Your Last Name'  className=''/> */}

                    </div>
                    
                        
                </div>
                <div>
                    <div className='px-10 pt-10'>
                        <b><label htmlFor="Email Address">Your Email Address</label><br /></b>
                        <input type="text" name="" id="" placeholder=' Your Email Address' className=' border-1 border-gray w-100 h-22 px-2 mt-2 bg-white rounded-lg outline-none' />
                    </div>
                    <div className=' px-10 pt-10'>
                        <div className=''>
                            <div>
                                <b><label htmlFor="Phone Number">Password</label><br /></b>
                                <input  type={type} name="" id="" placeholder='minimum of 8 characters' className=' border-1 border-gray w-100 h-22 px-2 mt-2 bg-white rounded-lg outline-none'/>
                            </div>
                            
                            <div className='ml-45 text-red -mt-10 underline'>
                                <span onClick={handleToggle}>{icon}</span>
                            </div>
                            

                        </div>
                       
                    </div>
                </div>
            </form>
        </div>
        <div className='ml-44 flex py-6'>
            <div>
                <input type="checkbox" className=' mr-4' />
            </div>
            <div>
                i have read,understand and agree to QuickShop's <br /> <span className='text-red underline'>terms & conditions</span> and <span className='text-red underline'>privacy policy</span>
            </div>
        </div>
        <div className='w-33 mx-44 py-4 mt-10 mb-32 text-center bg-orange-300 rounded-lg'>
            <button className='font-medium text-white'>Continue</button>

        </div>
        
    </div>
  )
}

export default SignUp