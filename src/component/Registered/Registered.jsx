import React from 'react'
import logo from '../Images/cN1g46Vw_400x400.png'
import { IoStorefront } from "react-icons/io5";
import { GoCheckCircleFill } from "react-icons/go";


const Registered = () => {
    
  return (
    <div>
        <div>
            <div>
                <div>
                    <div className=' ml-14 pt-10'><img src={logo} alt="" className=' inline-block w-10'/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2></div>
                </div>
            </div>
            <div className='pt-20 ml-32'>
                <h2 className='text-2xl font-medium'>Store Information</h2>
                <h3 className='py-3 pb-10'>Fill in these details to set up your store.</h3>
            </div>
            <div>
                <div className=' flex justify-between'>
                    <form action="" className=' w-99 ml-32'>
                        <label htmlFor="Business Name">Business Name</label><br />
                        <input type="text" placeholder='what you will like your store to be named' className='w-60 h-22 border-1 border-gray px-4 mt-2 mb-2 rounded-md outline-none' /><br />

                        <label htmlFor="">Store Category</label> <br />
                        <select name="" id="" className='w-60 h-22 border-1 border-gray px-4 mt-2 mb-4 rounded-md outline-none' >
                            <option value="">Select a category</option>

                        </select><br />

                        <label htmlFor="">Country</label> <br />
                        <select name="" id="" className='w-60 h-22 border-1 border-gray px-4 mt-2 mb-4 rounded-md outline-none'>
                            <option value="">Select a country</option>

                        </select><br />
                        <label htmlFor="">Business Address</label><br />
                        <input type="text" placeholder='Your Address for pickups' className='w-60 h-22 border-1 border-gray px-4 mt-2 mb-4 rounded-md outline-none'/> <br />

                        <label htmlFor="">Description</label><br />
                        <input type="text" placeholder='Describe what your business does in word' className='w-60 h-22 border-1 border-gray px-4 mt-2 mb-4 rounded-md outline-none'/> <br />
                        <label htmlFor="">X(fka Twitter)URL</label><br />
                        
                        <input type="text" placeholder='Your Twitter URL if available' className='w-60 h-22 border-1 border-gray px-4 mt-2 mb-4 rounded-md outline-none'/> <br />
                        
                        <label htmlFor=""> Instagram URL</label><br />
                        <input type="text" placeholder='Your Instagram URL if available' className='w-60 h-22 border-1 border-gray px-4 mt-2 mb-4 rounded-md outline-none'/> <br />
                        
                        <div className='w-60 flex justify-center py-3 mt-10 mb-32 text-center bg-orange-300 rounded-lg'>
                            <button className='font-medium text-white'>Continue</button>

                        </div>
                    
                    </form>

                    <div className='bg-amber w-99 px-10 -mt-40'>
                        <div className='pt-27'>
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
                                        <div className=' text-xs'>2/3</div>

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
                                        <div className=' text-xs'>3/3</div>

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

export default Registered