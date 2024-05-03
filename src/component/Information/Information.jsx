import React from 'react'
import { RxSlash } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Information = () => {
  return (
    <div className=' flex justify-center'>
        <div className='shadow-2xl my-20'>
            <div className=''>
                <div className='flex mt-14 px-10 '>
                    <div>
                        <h2>Home</h2>
                    </div>
                    <div className='flex items-center'>
                        <span className='inline-block'><RxSlash /></span>
                        <div className='hover:text-red inline-block'>
                            <Link to='/Cart'>Cart</Link>

                        </div>
                        <span className='inline-block'><RxSlash /></span>
                        <div className='hover:text-red inline-block'>
                            <Link to='/Information'>Information</Link>

                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div>
                    <div className='px-10'>
                        <h2 className='font-normal text-2xl py-2'>Your Information</h2>
                        <h6>Kindly enter accurate details below to guide your orders</h6>
                    </div>
                    <div className='flex px-10 pt-10'>
                        <div className='w-99'>
                            <b><label htmlFor="First Name" > Your First Name</label><br /></b>
                            <input type="text" placeholder=' Your First Name' className='border-1 border-gray rounded-lg h-10 px-2 w-100 mt-2' />

                        </div>
                        <div className='pl-4 w-99'>
                            <b><label htmlFor="Last Name"> Your Last Name</label><br /></b>
                            <input type="text" placeholder=' Your Last Name' className='border-1 border-gray rounded-lg h-10 px-2 w-100 mt-2' />
                            {/* <input type="text" placeholder=' Your Last Name'  className=''/> */}

                        </div>
                        
                    </div>
                    <div className='px-10 pt-10'>
                        <b><label htmlFor="Email Address">Your Email Address</label><br /></b>
                        <input type="text" name="" id="" placeholder=' Your Email Address' className='border-1 border-gray rounded-lg w-100 h-10 px-2 mt-2' />
                    </div>
                    <div className='px-10 pt-10'>
                        <b><label htmlFor="Phone Number">Your Phone Number</label><br /></b>
                        <input type="text" name="" id="" placeholder='Your Phone Number' className='border-1 border-gray rounded-lg w-100 h-10 px-2 mt-2'/>
                    </div>
                </div>
            </div>
            <div className='flex justify-between py-10'>
                <div></div>
                <div>
                    <h2>Subtotal</h2>
                </div>
                <div className=''>
                    <b><h2 className='pl-64'>0000</h2></b>
                </div>
                <div></div>
            </div>
            <div className=' bg-gradient-to-r from-red to-orange mx-10 my-10 rounded-lg'>
                <button className='w-100 px-10 py-3 text-white font-medium '>Continue To Shipping</button>

            </div>
            
        </div>
            
       
    </div>
  )
}

export default Information
