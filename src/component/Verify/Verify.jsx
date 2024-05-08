import React, { useState } from 'react'
import logo from '../Images/cN1g46Vw_400x400.png'

const Verify = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""))

    function handleChange(e, index){
        if(isNaN(e.value)) return false

        setOtp([...otp.map((data, i) =>(i === index) ? e.value : data)])

        if(e.nextSibling){
            e.nextSibling.focus();
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
                    <button className='text-red px-10 py-2 font-medium bg-orange-100 rounded-lg'>Login</button>
                </div>
            </div>
        </div>
        <div className=' pt-16 text-center'>
            <h2 className='pb-4 text-2xl font-medium'>Verify your email address 📧  </h2>
            <p className='py-4'>We sent a code to olutadeadeboye@gmail.com. <br /> Kindly enter the code below.</p>
        </div>
        <div>
            <div className=' flex justify-center'>
                {otp.map((data, i)=>{
                    return(
                        <div className='mt-6'>
                            <input type="text" 
                            name='otp'
                            value={data} maxLength={1}
                            onChange={e => handleChange(e.target, i)}
                            onFocus={e => e.target.select()} className=' border-gray w-12 h-12 mx-3 text-center border-2 rounded-md outline-none'/>

                        </div>
                       





                    )


                    
                })
                    
                
                    
                }
              
            </div>
                <div className='w-31 mx-46 flex justify-center py-4 mt-10 text-center bg-orange-300 rounded-lg'>
                    <button className='font-medium text-white'>Continue</button>

                </div>

        </div>
    </div>
  )
}

export default Verify
