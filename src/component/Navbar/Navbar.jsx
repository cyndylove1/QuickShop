import React from 'react'
import logo from '../Images/cN1g46Vw_400x400.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='pt-4 fixed w-full z-10 bg-amber py-4'>
            <nav className='flex justify-between items-center bg-grey rounded-full py-2 mx-20'>
                <div className='px-24 '><img src={logo} alt="" className='w-10 inline-block'/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2></div>

                <div>
                    <ul className='flex mx-24 font-medium cursor-pointer'>
                        <Link to='/'><li className='mx-4 hover:text-red '>Home</li></Link>
                        <Link to='/MarketPlace'><li className='mx-4 hover:text-red'>MarketPlace</li></Link>
                        <Link to='/Merchant'><li className='mx-4 hover:text-red'>Merchant</li></Link>
                        <Link to='/Blog'><li className='mx-4 hover:text-red'>Blog</li></Link>
                        
                    </ul>
                </div>
            </nav>
        </div>

    </div>
  )
}

export default Navbar