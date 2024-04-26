import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import logo from '../Images/cN1g46Vw_400x400.png'
import { IoSearchOutline } from "react-icons/io5";
import heel from '../Images/pexels-skylar-kang-6046209.jpg'
import shoe from '../Images/pexels-bhine-4314204.jpg'
import heels from '../Images/pexels-gabby-k-7691385.jpg'
import gifted from '../Images/gifted bags.png'
import { IoIosArrowForward } from "react-icons/io";
import Product from '../Product';
import Subscribe from '../Subscribe/Subscribe'
import Footer from '../Footer/Footer';

const MarketPlace = () => {
  return (
    <div className=''>
        <div className=''>
            <div className='flex justify-between items-center justify-center mx-20 my-10'>

                <div className=''>
                    <div className='flex items-center '>
                        <img src={logo} alt="" className='w-10 inline-block'/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2>

                        <div className='mx-10 h-12 relative flex items-center focus-within:text-black '>
                        <IoSearchOutline  className='absolute ml-4 pointer-events-none'/>
                            <input type="text" className='pl-10 h-10 w-100 border-2 border-gray rounded-md px-32 outline-none transition duration-500 ease-in-out' placeholder='Search for any Product'  spa/>
                        </div>  

                    </div>
                            
                </div>
                <div>
                    <div className='flex items-center'>
                        <button className='bg-orange-100 text-red font-medium py-2 px-6 rounded-md'>Sell on QuickStore for free</button>
                        <div className='ml-6'> 
                            <h2><span><CiShoppingCart className='inline-block mr-4' /></span>Cart <span className='text-red'>(0)</span></h2>
                        </div>

                    </div>
                    
                </div>
                

            </div>
            
        

        </div>
        <div className='flex justify-evenly mx-20'>
            
                <div className=' w-60 h-78 relative'>
                    <div className='bg-black/40 w-100 h-77 rounded-2xl'>
                        <img src={heel}alt="" className='w-100 h-77 mix-blend-overlay absolute rounded-2xl' />


                        <div className='absolute pt-48 px-14'>
                             <h2 className='text-white font-normal text-3xl'>Free Delivery on all dresses <br /> ordered until February 14</h2>
                            <h5 className='font-thin text-white text-xs pt-2'>All the sleekest dress for you to twin with your girlfriends.</h5>

                        </div>
                        
                    </div>
                    
                    
                    

                </div>
            
            <img src={shoe} alt="" className='w-40 h-77 ml-10 rounded-2xl' />

        </div>
        <div>
            <div className='fonts-sans pb-10 pl-24 pt-20 text-4xl font-medium'>
                <h2 className='text-xl'>Popular Categories</h2>
            </div>

            <div className=''>
            
                    <div>
                        <div className='mx-24 grid grid-cols-4 gap-4'>
                            <div className='w-full '>
                                <img src={heels}className='w-full h-15 rounded-md ' alt="" />
                                
                            </div>
                            <div className=''>
                                <img src={heels}className='w-full h-15 rounded-xl' alt="" />
                                
                            </div>
                            <div className=' '>
                                <img src={heels}className='w-full h-15 rounded-xl' alt="" />
                                
                            </div>
                            <div className=''>
                                <img src={heels}className='w-full h-15 rounded-xl' alt="" />
                                
                            </div>
                            
                            
                           
                            
                        </div>
                    </div>

            
            </div>
            
        </div>
        <Product/>

        <div className='bg-gradient-to-r from-wineRed to-darkRed h-60 my-48 mx-20 overflow-hidden'>
            <div className='flex justify-between '>
                <div className='py-10 px-6 '>
                    <h2 className='font-medium text-white text-3xl'>Free delivery on <br />all Lagos Orders</h2>
                    <button className='bg-orange-200 py-2 px-6 rounded-xl mt-4 text-white font-medium'>Shop now <span><IoIosArrowForward   className='inline-block'/></span></button>

                </div>
                <div>
                    <img src={gifted} alt="" />
                </div>
                


            </div>
            
        </div>
        <Product title='More Product'/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default MarketPlace
