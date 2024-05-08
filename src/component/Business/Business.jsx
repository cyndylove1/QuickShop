import React from 'react'
import logo from '../Images/cN1g46Vw_400x400.png'
import skyScrapper from '../Images/isometric-skyscraper.png'
import { GoCheckCircleFill } from "react-icons/go";


const Business = () => {
    
  return (
    <div>
        <div>
            <div className='flex justify-between items-center mx-24 mt-4'>
                <div>
                    <div className=''><img src={logo} alt="" className='w-10 inline-block'/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2></div>
                </div>
                <div>
                    <button className='bg-orange-100 py-2 px-10 rounded-lg text-red font-medium '>Login</button>
                </div>
            </div>
        </div>
        <div className='text-center pt-10 '>
            <h2 className='text-2xl font-medium'>Select your business type</h2>
            <p className='pt-4'>Pick a business type and we will curate a great <br /> experience for your online store.</p>
        </div>
        <div className=''>
            <div className='flex justify-center ml-6 mt-24'>
                <div className='border-coolGray border-1 rounded-xl h-15 w-34 mx-4'>
                    <div>
                        
                        <div className='w-100 flex justify-center relative'>
                            <img src={skyScrapper}  alt="" className='relative h-100 w-37 bg-lightGreen rounded-full mt-8' />
                            <input type="radio" className='mt-10 ml-60 absolute ' />
                            <h2 className='text-green-100 mt-6 absolute ml-2'><GoCheckCircleFill/></h2>
                            
                        
                        </div>
                        
                    </div>
                    
                    <div className='text-center mt-10'>
                        <h3 className='pt-2 font-medium text-lg'>A Registered Business</h3>
                        <h4>This covers businesses with verified <br /> registration documents.</h4>
                                      
                    </div>

                </div>

                <div className='border-coolGray border-1 rounded-xl h-15 w-34 mx-4'>
                    <div className='w-100 flex justify-center relative'>
                        <img src={skyScrapper} alt="" className='h-100 w-37 bg-skyBlue rounded-full mt-8' />
                        <input type="radio" className='absolute ml-60 mt-10'/>
                    </div>
                    <div className='text-center mt-10'>
                        <h3 className='pt-2 font-medium text-lg'>A Non-Registered Business</h3>
                        <h4>This covers sole proprietors, freelancers <br /> or Non-registered businesses.</h4>
                                                  
                                      
                    </div>

                </div>
                
            </div>

        </div>
        <div className='flex justify-center mt-20 bg-orange-300 w-33 text-center mx-44 mb-32 py-3 rounded-lg'>
            <button className='w-99 text-white font-medium'>Continue</button>

        </div>
        
    </div>
  )
}

export default Business