import React from 'react'
import logo from '../Images/cN1g46Vw_400x400.png'

const SideBar = () => {
  return (
    <div>
        <div className=''>
            <div className=''>
                <div className=''><img src={logo} alt="" className='w-10 inline-block'/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2></div>

            </div>
            <div>
                <li>DashBoard</li>
            </div>
        </div>
    </div>
  )
}

export default SideBar