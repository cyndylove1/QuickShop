import React from 'react'
import logo from '../Images/cN1g46Vw_400x400.png'
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>

        <div className='py-24'>

            <div className='px-24 flex justify-center'>
                <img src={logo} alt="" className='w-10 inline-block'/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2>
            </div>

            <div className='text-center py-14'>
                <div><MdEmail  className='inline-block text-red mx-2'/><span className=''>helpdesk@getquickshop.com</span></div>
                <div className='py-4'><IoLocationSharp className='inline-block text-red mx-2' /><span>plot 162A, independence Layout, Enugu, Enugu State.</span></div>

            </div>




            <div className='flex justify-center'>
                <h2 className='bg-orange-50 p-3 rounded-full mx-4'><FaFacebookSquare className='text-red ' /></h2>
                <h2 className='bg-orange-50 p-3 rounded-full mx-4'><IoLogoTwitter className='text-red' /></h2>
                <h2 className='bg-orange-50 p-3 rounded-full mx-4'><RiInstagramFill className='text-red' /></h2>
                <h2 className='bg-orange-50 p-3 rounded-full mx-4'><FaYoutube  className='text-red'/></h2>

            </div>
            <p className='text-center pt-10'>copyright &copy; Quickshop 2023. All rights reserved</p>









        </div>


    </div>
  )
}

export default Footer