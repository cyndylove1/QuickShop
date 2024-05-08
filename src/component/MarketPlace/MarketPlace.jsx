import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import heel from '../Images/pexels-skylar-kang-6046209.jpg'
import shoe from '../Images/pexels-bhine-4314204.jpg'
import heels from '../Images/pexels-gabby-k-7691385.jpg'
import gifted from '../Images/gifted bags.png'
import { IoIosArrowForward } from "react-icons/io";
import Product from '../Product';
import Subscribe from '../Subscribe/Subscribe'
import Footer from '../Footer/Footer';
import { RxSlash } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from  'clsx';
import { IoCloseOutline } from "react-icons/io5";
import logo from '../Images/cN1g46Vw_400x400.png'
import { IoSearchOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import {  useSelector } from 'react-redux';
import Menu from '../Menu/Menu';



const MarketPlace = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)  
    const Data = useSelector((state)=>state.cart)


  
  return (
    <div className=''>
        
         <div>
                <div>
                    <div className=''>
                        <div className='flex justify-between items-center mx-20 my-6'>

                            <div className=''>
                                <div className='flex items-center  '>
                                    <img src={logo} alt="" className='w-10 inline-block '/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2>

                                    <div className='mx-10 h-12 relative flex items-center focus-within:text-black '>
                                        <IoSearchOutline  className='absolute ml-4 pointer-events-none'/>
                                        <input type="text" className='pl-10 h-10 w-100 border-2 border-gray rounded-md px-32  outline-none' placeholder='Search for any Product'/>
                                    
                               
                                     </div>  

                                </div>
                                
                            </div>
                            <div className=''>
                                <div className='flex items-center ml-10'>
                                    <button className='bg-orange-100 text-red font-medium py-2 px-6 rounded-md'>Sell on QuickShop</button>
                                    <div className='flex mx-10 cursor-pointer' onClick={()=> setIsMenuOpen(true)}>
                                        <Link to="/" className='relative'>
                                            <CiShoppingCart size={20}/>
                                   
                                        </Link>
                                        <div className='-mt-2 absolute mx-2 flex '>
                                   
                                            <p className='bg-red flex items-center justify-center w-4 h-4 rounded-full inline-block '><span className='p-2 text-xs text-white font-medium'></span></p>
                                            
                                            <div className=''>
                                                <h2 className='text-sm pt-2 '>Cart</h2>

                                            </div>
                                    
                                    
                                        </div>
                                        
                        
                                

                                
                             
                                    </div>
                                    <div className='flex mx-10'>
                                        <h2 className=''><GoPerson size={20} /></h2>
                                        <div className=''>
                                            <h3 className='text-sm'>Account</h3>
                                

                                        </div>
                                       
                                
                                
                                    </div>
                                    
                                    

                                </div>
                                
                        
                            </div>
                    

                        </div>
                
            

                    </div>
           
                </div>
            </div>
            
        
        {/* <Navbar2/> */}
        
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
                            <Link to="/AllProduct">
                                <div className='w-full '>
                                    <img src={heels}className='w-full h-15 rounded-md ' alt="" />
                                    
                                </div>
                            </Link>
                            <Link to="/AllProduct">
                                <div className='w-full '>
                                    <img src={heels}className='w-full h-15 rounded-md ' alt="" />
                                    
                                </div>
                            </Link>
                            <Link to="/AllProduct">
                                <div className='w-full '>
                                    <img src={heels}className='w-full h-15 rounded-md ' alt="" />
                                    
                                </div>
                            </Link>
                            <Link to="/AllProduct">
                                <div className='w-full '>
                                    <img src={heels}className='w-full h-15 rounded-md ' alt="" />
                                    
                                </div>
                            </Link>
                            
                            {/* <div className=''>
                                <img src={heels}className='w-full h-15 rounded-xl' alt="" />
                                
                            </div>
                            <div className=' '>
                                <img src={heels}className='w-full h-15 rounded-xl' alt="" />
                                
                            </div>
                            <div className=''>
                                <img src={heels}className='w-full h-15 rounded-xl' alt="" />
                                
                            </div> */}
                            
                            
                           
                            
                        </div>
                    </div>

            
            </div>
            
        </div>
        
            <Product type='Featured'/>

        
      

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
        <Product type="More"/>
        <Subscribe/>
        <Footer/>
        <div className={clsx('fixed bg-black/10 t  transition-all backdrop-blur-sm top-0 right-0 w-full h-full -translate-x-full', isMenuOpen && 'translate-x-0')}>
            <div className='text-black bg-white absolute right-0 top-0 h-screen w-30 z-50 flex justify-between '>
                <div className='flex'>
                    <div>
                        Home <span className='inline-block'><RxSlash/></span>
                    </div>
                    <div>
                        <h2 className='text-red'>Cart</h2>
                    </div> 
                    {/* <div className='text-red'>{product.name}</div> */}
                
                </div>
                {/* <div>
                    <h4 className='text-2xl text-black'>Your Cart</h4>
                </div> */}
                <div className=''>
                    <IoCloseOutline onClick={()=>setIsMenuOpen(false)} className='text-2xl'/>
                    

                </div>
                
            </div>
        </div>
        <div>
            {
                Data.length === 0 ? (
                    <div>
                        <h2>Your Cart is Empty</h2>
                        <button>Shop Now</button>
                    </div>
                ):(
                    <div>
                        {Data.map((item)=>{
                            return(
                                <Menu key={item.id} 
                                item = {item}/>
                            )
                        })}

                    </div>
            )}
        </div>

        
    </div>
  )
}

export default MarketPlace
