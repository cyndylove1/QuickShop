import React from 'react'
import logo from '../Images/cN1g46Vw_400x400.png'
import { IoStorefront } from "react-icons/io5";
import { GoCheckCircleFill } from "react-icons/go";


const Payment = () => {
  return (
    <div>
        <div>
            <div>
                <div className=' ml-14 pt-10'><img src={logo} alt="" className=' inline-block w-10'/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2></div>
            </div>
            <div>
                <div className='flex justify-between'>
                    <div>
                        <div>
                            <div className=' pt-10 pb-4 mx-32'>
                                <h2 className='text-2xl font-medium'>Payment Information</h2>
                                <p>Fill in these details to set up payment processing.</p>
                            </div>
                            <form action="" className='mx-32'>
                                <label htmlFor="" className=''>Bank Name</label><br />
                                <input type="text" placeholder='Select your Bank' className=' border-gray h-22 w-100 px-4 mb-4 border-2 rounded-md outline-none' /><br />
                                <label htmlFor="">Account Number</label><br />
                                <input type="text" placeholder='Your Account Number'  className=' border-gray h-22 w-100 px-4 mb-4 border-2 rounded-md outline-none'/><br />
                                <label htmlFor="">Bank Verification Number</label> <br />
                                <input type="text" placeholder='Bank Verification Number' className=' border-gray h-22 w-100 px-4 mb-4 border-2 rounded-md outline-none' />
                                <div className='w-100 flex justify-center py-3 mt-10 mb-32 text-center bg-orange-300 rounded-lg'>
                                    
                                    <button className='font-medium text-white'>Continue</button>

                                </div>
                            </form>


                            
                            
                        </div>

                        
                    </div>

                    <div className='bg-amber px-10 -mt-32'>
                        <div className='pt-44'>
                            <h2 className='text-2xl font-medium'>Hey Quick<span className='text-red'>Shopper 👋</span></h2>
                            <p className='py-2 font-normal'>We need these details to set up your merchant account.</p>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div className='rounded-xl flex items-center px-4 pt-4 pb-6 mt-12 bg-white'>
                                        <div className=' flex justify-center w-10 h-10 pt-3 bg-gray-100 rounded-full'>
                                            <h2 className='text-dark-gray w-4'><IoStorefront /></h2>
                                        </div>
                                        <div className='relative'>
                                            <div className=' flex ml-4'>
                                                <div>
                                                    <h5 className='pb-2 font-medium'>Store Information</h5>

                                                </div>
                                                <div className=' mt-1'>
                                                    <h2 className='text-green-100'><GoCheckCircleFill/></h2>
                                                    
                                                </div>
                                            </div>
                                            
                                            <h6 className='ml-4 text-sm'>Fill basic details about your store accurately.</h6>
                                            
                                        </div>
                                        <div className=' text-xs'>1/3</div>

                                    </div>
                                    <div className='rounded-xl flex items-center px-4 pt-4 pb-6 mt-4 bg-white'>
                                        <div className=' flex justify-center w-10 h-10 pt-3 bg-gray-100 rounded-full'>
                                            <h2 className='text-dark-gray w-4'><IoStorefront /></h2>
                                        </div>
                                        <div className='relative'>
                                            <div className=' flex ml-4'>
                                                <div>
                                                    <h5 className='pb-2 font-medium'>Document Upload</h5>

                                                </div>
                                                <div className=' mt-1'>
                                                    <h2 className='text-gray'><GoCheckCircleFill/></h2>
                                                    
                                                </div>
                                            </div>
                                            
                                            <h6 className='ml-4 text-sm'>Upload documents for your verification.</h6>
                                            
                                        </div>
                                        <div className=' ml-6 text-xs'>2/3</div>

                                    </div>
                                    <div className='rounded-xl flex items-center px-4 pt-4 pb-6 mt-4 bg-white'>
                                        <div className=' flex justify-center w-10 h-10 pt-3 bg-gray-100 rounded-full'>
                                            <h2 className='text-dark-gray w-4'><IoStorefront /></h2>
                                        </div>
                                        <div className='relative'>
                                            <div className=' flex ml-4'>
                                                <div>
                                                    <h5 className='pb-2 font-medium'>Payment Information</h5>

                                                </div>
                                                <div className=' mt-1'>
                                                    <h2 className='text-gray'><GoCheckCircleFill/></h2>
                                                    
                                                </div>
                                            </div>
                                            
                                            <h6 className='ml-4 text-sm'>Fill details for processing your payments.</h6>
                                            
                                        </div>
                                        <div className=' ml-4 text-xs'>3/3</div>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
                
                    
           
            
            </div>

        </div>
    </div>
  )
}

export default Payment