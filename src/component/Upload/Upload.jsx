import React, { useState } from 'react'
import logo from '../Images/cN1g46Vw_400x400.png'
import { FaFileUpload } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";
import { GoCheckCircleFill } from "react-icons/go";


const Upload = () => {
    const[image , setImage] = useState(null)
    const[fileName, setFileName] = useState('no selected file')
  return (
    <div>
        <div className='flex justify-between'>
            <div>
                <div>
                    <div className=' ml-14 pt-10'><img src={logo} alt="" className=' inline-block w-10'/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2></div>
                </div>

                <div className='pt-14 pb-8 mx-20'>
                    <h2 className='text-2xl font-medium'>Document Upload</h2>
                    <h3>Fill in these details to set up your store.</h3>
                </div>
                <div className=' mx-14'>
                    <h3 className=' ml-7 pb-2 text-sm font-medium'>Store logo</h3>
                    <div className='flex'>
                        <div className=' bg-skyBlue w-10 h-10 mx-10 rounded-full'>
                            <h2 className=' py-2 mx-3 text-sm font-medium'>LO</h2>
                        </div>
                        <div>
                            <form className='border-1 border-gray w-120 p-10 mb-6 text-center rounded-lg' onClick={()=> document.querySelector(".input-field").click()}>
                                
                                  
                                    <input type="file" id="upload" accept=".doc, .docx, .Pdf"  className='input-field' hidden />
                                    <div className='bg-amber text-red ml-28 flex justify-center w-10 h-10 rounded-full'>
                                        <h2><FaFileUpload  className=' h-7 w-10 pt-3'/></h2>
                                        
                                    </div>
                                   
                                <p className='text-sm'><span className='text-red font-medium'>Click to Upload </span>or drag and drop <br /> Minimumm of 2MB required</p>
                                {/* {
                                    image ?
                                    <img src={image} width={60} height={60} alt={fileName}/>
                                    :
                                    <FaFileUpload className='bg-amber w-6 h-6 rounded'/>
                                } */}
                             
        
                            </form>
                            
                               <b><label htmlFor="" className=' py-2'>Identification Type</label> <br /></b> 
                                <select name="" id="" className='h-22 border-1 border-gray w-120 rounded-md outline-none'>
                                    <option value="">Select an Identification Type</option>
                                </select>
                                
                                <div className='w-120 py-3 mt-20 text-center bg-orange-300 rounded-lg'>
                                    <button className='w-99 font-medium text-white'>Continue</button>
                                </div>
                        </div>

                    </div>
                </div>
            </div>


                <div className='bg-amber w-40 ml-20 -mt-20'>
                        <div className='pt-27 ml-10'>
                            <h2 className='text-2xl font-medium'>Hey Quick<span className='text-red'>Shopper 👋</span></h2>
                            <p className='py-2 font-normal'>We need these details to set up your merchant account.</p>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div className='rounded-xl flex items-center pt-4 pb-6 mx-6 mt-12 bg-white'>
                                        <div className=' flex justify-center w-10 h-10 px-4 pt-3 mx-4 bg-gray-100 rounded-full'>
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
                                    <div className='rounded-xl flex items-center px-4 pt-4 pb-6 mx-6 mt-4 bg-white'>
                                        <div className=' flex justify-center w-10 h-10 pt-3 bg-gray-100 rounded-full'>
                                            <h2 className='text-dark-gray px-4'><IoStorefront /></h2>
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
                                        <div className=' ml-10 text-xs'>2/3</div>

                                    </div>
                                    <div className='rounded-xl flex items-center px-4 pt-4 pb-6 mx-6 mt-4 bg-white'>
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
                                        <div className=' ml-10 text-xs'>3/3</div>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

        </div>

        
    </div>
  )
}

export default Upload
