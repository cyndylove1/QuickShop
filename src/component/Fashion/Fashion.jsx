import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import logo from '../Images/cN1g46Vw_400x400.png'
import { IoSearchOutline } from "react-icons/io5";
import { RxSlash } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Product from '../Product'
import { IoIosArrowForward , IoIosArrowDown} from "react-icons/io";
import FashionImage from '../FashionImage/FashionImage';
import Footer from '../Footer/Footer';

const Fashion = () => {
  return (
    <div>
        <div>
            <div className=''>
                <div className='flex justify-between items-center justify-center mx-20 my-10'>

                    <div className=''>
                        <div className='flex items-center '>
                            <img src={logo} alt="" className='w-10 inline-block'/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2>

                            <div className='mx-10 h-12 relative flex items-center focus-within:text-black '>
                            <IoSearchOutline  className='absolute ml-4 pointer-events-none'/>
                                <input type="text" className='pl-10 h-10 w-100 border-2 border-gray rounded-md px-32 hover:px-36' placeholder='Search for any Product'/>
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

        </div>
        <div className='flex ml-24'>
            <div>
                <a href="">Home</a>
            </div>
            <div className=''>
                <span className='inline-block'><RxSlash /></span>
                <div className='hover:text-red inline-block'>
                    <Link to='/Fashion'>Women's Fashion</Link>

                </div>
               
                
            </div>
        </div>
        <div className='flex justify-between mx-20 pt-6 mb-10'>
            <div>
                <b className='text-2xl'>Shoes</b>
            </div>
            <select name="" id="" className='border-2 border-gray rounded-2xl '>
                <option value="" className=''>Most Recent</option>
            </select>
        </div>

        <div className='grid grid-cols-[20%,80%] mx-20'>
            <div className=''>
                <div className='border-1 border-gray rounded-xl'>
                    <div className='flex items-center justify-between py-4 border-b border-gray w-full p-2'>
                        <div>
                            <h2>Categories</h2>   
                        </div>
                        <div><IoIosArrowDown /></div>
                        

                    </div>
                    <div className='pb-4'>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Beauty</label>

                            </div>
                            <div className='text-red'>
                                <input type="radio" name='Beauty' value='regular'id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Women's Fashion</label>

                            </div>
                            <div className='text-red'>
                                <input type="radio" name='Beauty' value='regular'id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Men's Fashion</label>

                            </div>
                            <div className='text-red'>
                                <input type="radio" name='Beauty' value='regular'id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Electronics</label>

                            </div>
                            <div className='text-red'>
                                <input type="radio" name='Beauty' value='regular'id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Drinks</label>

                            </div>
                            <div className='text-red'>
                                <input type="radio" name='Beauty' value='regular'id='regular' />
                            </div>
                        </div>
                        
                        
                    </div>

                    

                </div>
                <div className='border-1 border-gray rounded-xl mt-4 '>
                    <div className='flex items-center justify-between py-4 border-b border-gray w-full p-2  '>
                        <div>
                            <h2>Sub-Categories</h2>   
                        </div>
                        <div><IoIosArrowDown /></div>
                        

                    </div>
                    <div className='pb-4 overflow-hidden'>
                        <div className='flex items-center justify-between p-2 overflow-hidden'>
                            <div>
                                <label htmlFor="">Shirts</label>

                            </div>
                            <div className='text-red'>
                                <input type="radio" name='Beauty' value='regular'id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Shoes</label>

                            </div>
                            <div className='text-red'>
                                <input type="radio" name='Beauty' value='regular'id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Dresses</label>

                            </div>
                            <div className='text-red'>
                                <input type="radio" name='Beauty' value='regular'id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">bags</label>

                            </div>
                            <div className='text-red'>
                                <input type="radio" name='Beauty' value='regular'id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Skirts</label>

                            </div>
                            <div className='text-red'>
                                <input type="radio" name='Beauty' value='regular'id='regular' />
                            </div>
                        </div>
                        
                        
                    </div>

                    

                </div>
            </div>
            <FashionImage/>
           
        </div>
        <Footer/>
    </div>
  )
}

export default Fashion