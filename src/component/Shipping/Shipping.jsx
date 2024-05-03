import React from 'react'
import { RxSlash } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Shipping = () => {
  return (
    <div>
        <div className='shadow-2xl my-20 mx-10 w-40'>
            <div className=''>
                <div className='flex mt-14 px-10 py-6 '>
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
                        <h2 className='font-normal text-2xl py-2'>Shipping Details</h2>
                        <h6>Kindly enter accurate details below to guide your orders</h6>
                    </div>
                    <div className='flex px-10 pt-10'>
                        <select className='w-100 h-10 border-1 border-gray outline-none rounded-lg '>
                            <b><label htmlFor="State" > State</label><br /></b>
                            <option value="select a state"> Select a State</option>
                            <option value="select a state"> Abia</option>
                            <option value="select a state"> Adamawa</option>
                            <option value="select a state"> Akwa-Ibiom</option>

                        </select>
                        <select className='w-100 h-10 border-1 border-gray outline-none rounded-lg '>
                            <b><label htmlFor="City" > City</label><br /></b>
                            <option value="select a state"> Select a City</option>
                            <option value="select a state"> Abia</option>
                            <option value="select a state"> Adamawa</option>
                            <option value="select a state"> Akwa-Ibiom</option>

                        </select>
                        
                        
                    </div>
                    <div className='px-10 pt-10'>
                        <b><label htmlFor="delivery Address">Your Delivery Address</label><br /></b>
                        <input type="text" name="" id="" placeholder=' Your Delivery Address' className='border-1 border-gray rounded-lg w-100 h-10 px-2 mt-2' />
                    </div>
                    <div className='px-10 pt-10'>
                        <b><label htmlFor="Phone Number">Your Phone Number</label><br /></b>
                        <input type="text" name="" id="" placeholder='Your Phone Number' className='border-1 border-gray rounded-lg w-100 h-10 px-2 mt-2'/>
                    </div>
                </div>
            </div>
            <div className='flex justify-between py-10'>
                <div>
                    <div></div>
                    <div>
                        <h2>Subtotal</h2>
                    </div>
                    <div className=''>
                        <b><h2 className='pl-64'>0000</h2></b>
                    </div>

                </div>
               
                
                
            </div>
            <div className='flex justify-between py-10'>
                <div>
                    <div></div>
                    <div>
                        <h2>Subtotal</h2>
                    </div>
                    <div className=''>
                        <b><h2 className='pl-64'>0000</h2></b>
                    </div>

                </div>
               
                
                
            </div>
            <div className=''>
                <div className='flex items-center'>
                    <div></div>
                    <div className='inline-block'>
                        <h2 className='px-10'>Subtotal</h2><span className=' ml-45'>00000</span>
                    </div>
                    {/* <div className=''>
                        <b><h2 className='pl-96'>0000</h2></b>
                    </div> */}

                </div>
               
                
                
            </div>
            <div className=' bg-gradient-to-r from-red to-orange mx-10 my-10 rounded-lg'>
                <button className='w-100 px-10 py-3 '>Continue To Payment</button>

            </div>
            
        </div>
            
    </div>
  )
}

export default Shipping
