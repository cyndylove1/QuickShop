import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Subscribe from '../Subscribe/Subscribe'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <div className=''>

            <div className='flex justify-between mx-20 pt-48 '>
                <div className='pt-16'>
                    <h2 className='font-normal text-4xl'>Talk to our sales team</h2>
                    <p className='font-light text-sm py-2'>Do you have any questions for Quickshop regarding selling your <br /> products online? </p>
                    <h6 className='font-light text-sm'>Kindly fill this form to connect with a member of the sales team.</h6>
                </div>

                <form action="">
                    
                    <label htmlFor="FullName">Full Name</label><br />
                    <input type="text" name="" placeholder='Your Full Name' className='h-21 w-100 border-2 border-gray rounded-xl px-2 mb-4 mt-2' required/> <br />

                    <label htmlFor="Email Address">Email Address</label> <br />
                    <input type="text" name="" placeholder='Your Email Address' className='h-21 w-100 border-2 border-gray rounded-xl px-2 mb-4 mt-2'  required/><br />

                    <label htmlFor="Business Name">Business Name</label><br />
                    <input type="text" name="" placeholder='Your Business Name'  className='h-21 w-100 border-2 border-gray rounded-xl px-2 mb-4 mt-2 ' required/> <br />
                    

                    <label htmlFor="Business Category"> Business Category</label><br />
                    <select name="Your Business Category" id="" className='h-21 w-100 border-2 border-gray rounded-xl px-2 mr-4 mb-4 mt-2' required>
                        <option value="" className='pl-4'>Your Business Category</option>
                    
                    </select> <br />
                    <label htmlFor="">what do you need help with?</label><br />
                    <textarea name="" id="" cols="50" rows="3" className='border-2 border-gray rounded-xl px-2 mb-4 mt-2' placeholder='Type Here' required></textarea>

                    <div>
                        <button className='w-100 h-21 bg-orange-300 rounded-xl text-white mt-4 font-medium' >Submit</button>

                    </div>

                    
                    

                
                    
                </form>

            </div>
            <Subscribe/>
            <Footer/>
        </div>
    </div>
  )
}

export default Contact