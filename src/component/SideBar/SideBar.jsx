import React from 'react'
import logo from '../Images/cN1g46Vw_400x400.png'
import { LuLayoutDashboard } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";

const SideBar = () => {
  return (
    <div>
        <div className=''>
            <div className=''>
                <div className=''><img src={logo} alt="" className='w-10 inline-block'/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2></div>

            </div>
            <div>
                <div className='flex items-center'>
                    <div>
                        <h2 className='mx-2'><LuLayoutDashboard /></h2>
                    </div>
                    <div className='list-none'>
                        <li>DashBoard</li>

                    </div>
                    
                </div>
                <div className='flex items-center'>
                    <div>
                        <h2 className='mx-2'><LuLayoutDashboard /></h2>
                    </div>
                    <div className='list-none'>
                        <li>DashBoard</li>

                    </div>
                    
                </div>
                <div className='flex items-center'>
                    <div>
                        <h2 className='mx-2'><LuLayoutDashboard /></h2>
                    </div>
                    <div className='list-none'>
                        <li>DashBoard</li>

                    </div>
                    
                </div>
                <div className='flex items-center'>
                    <div>
                        <h2 className='mx-2'><LuLayoutDashboard /></h2>
                    </div>
                    <div className='list-none'>
                        <li>DashBoard</li>

                    </div>
                    
                </div>
                <div className='flex items-center'>
                    <div>
                        <h2 className='mx-2'><CiSettings /></h2>
                    </div>
                    <div className='list-none'>
                        <li>DashBoard</li>

                    </div>
                    
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default SideBar