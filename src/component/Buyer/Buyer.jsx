import React from 'react'
import phone from '../Images/Buyer Mockup - Homepage.png'
import google from '../Images/pngwing.com (9).png'
import { TiStarburst } from "react-icons/ti";

const Buyer = () => {
  return (
    <div>

        <div className=' pt-24'>
            <div className=' flex mx-64'>
                <div className=''>
                    <img src={phone} alt="" className=' h-77 w-100' />

                </div>

                <div className='list-none pt-4 '>
                        
                    <h2 className='text-sm pl-10 py-2 '><span className=' text-red text-xl'><TiStarburst className='inline-block mx-2'/></span>Buy variety of products</h2>
                    <h2 className='text-sm pl-10 py-2'><span className='text-purple text-xl '><TiStarburst className='inline-block mx-2'/></span>Access to in-built delivery options.</h2>
                    <h2 className='text-sm pl-10 py-2'><span className=' text-green text-xl '><TiStarburst className='inline-block mx-2'/></span>Affordable and diverse product options</h2>
                    <h2 className='text-sm pl-10 py-2'><span className='text-orange text-xl'><TiStarburst className='inline-block mx-2' /></span>Manage your orders on your mobile app </h2>

                    <div className='flex mt-6 pl-10 '>
                        <img src={google}alt="" className='w-24' />
                        <img src={google}alt="" className='w-24' />
                            {/* <img src={apple} alt="" className='w-15 pl-4' /> */}
                    </div>
                        
                </div>
                     
                   

            </div>  
                
        </div>
    </div>
  )
}

export default Buyer
