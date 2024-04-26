import React, { useState } from 'react'
import merchant from '../Images/istockphoto-1193229448-612x612 (1).jpg'
import Navbar from '../Navbar/Navbar'
import video from '../../assets/Dropbox_Homepage.mp4'
import { BiStoreAlt } from "react-icons/bi";
import { IoBagOutline } from "react-icons/io5";
import { AiOutlineInbox } from "react-icons/ai";
import { LuGanttChartSquare } from "react-icons/lu";
import { IoIosArrowForward , IoIosArrowDown} from "react-icons/io";
import shape3 from '../Images/Colorful Shape 3 - Boost your Sales (1).png'
import Footer from '../Footer/Footer';
import Subscribe from '../Subscribe/Subscribe'

const Merchant = () => {
    const [showAccordion, setShowAccordion] = useState(false); 

    function HandleAccordion() {
        setShowAccordion(!showAccordion);

    }
    const accordion = [
        {
            title:'What kind of Product can i sell?',
            description:'You can sell Physical Product on this Store'

        },
        {
            title:'Whats the cost of setting up a store?',
            description:'You can sell Physical Product on this Store'

        },
        {
            title:'How long does it take to setup a store?',
            description:'You can sell Physical Product on this Store'

        },
        
    ]
  return (
    <div>
        <div>
            <div className='bg-amber h-98'>
                <Navbar/>
                
                <div className='flex justify-between mx-20 h-98 pt-16'>
                    <div className='py-32'>
                        <h2 className='text-5xl font-medium'><span className='text-red'> 2000+ </span> businesses <br /> trust QuickShop</h2>
                        <h6 className='py-6 font-thin'>Set up your store in less than 5 minutes.</h6>
                        <div className='flex items-center font-medium'>
                            <div>
                                <button className='py-3 px-10  bg-gradient-to-r from-red to-orange rounded-xl text-white'>Get Started</button>
                            </div>
                            <div>
                                <button className='py-3 px-10 bg-orange-100 ml-4 rounded-xl text-red'>Contact Sales</button>
                            </div>
                        </div>


                    </div>
                    <div className='w-99 h-78 py-24 rounded'>
                        <div>
                            <img src={merchant} alt="" className='h-78  rounded-2xl' />

                        </div>
                        {/* <div className='absolute -mt-24 mr-40'>
                            <img src={shape1} alt="" className=' pr-25 mr-20' />
                        
                        </div> */}
                        <div className='absolute -mt-35 '>
                            <img src={shape3} alt="" className='ml-50 w-20 w-15'  />
                        
                        </div>
                        

                    </div>
                    
                </div>

            </div>



        </div>





        <div>
            <div className='text-center pt-32'>
                <h2 className='text-3xl font-normal'>How to create your store</h2>
                <h5 className='py-4 text-sm'>watch this short vidoe to guide you on creating your store.</h5>
            </div>
            <div className=' py-10 '>
                <div className='bg-orange-100 h-97 w-70 rounded-2xl mx-20 flex items-center justify-center '>
                    <video src={video} width={700} height={400} autoPlay loop muted ></video>

                </div>


               
                
            </div>
            
        </div>




        <div>
            <div className='text-center pt-48'>
                <h2 className='font-normal text-3xl'>Why QuickShop?</h2>
                <p className='pt-10 text-lg'>Get to know why 2000+ businesses trust QuickShop</p>
            </div>
            <div>
                <div className='mt-32'>
                    <div className='flex justify-evenly mx-32 mt-10'>
                        <div className='flex  border-1 border-gray rounded-xl p-4'>
                            <div className=' flex justify-center'>
                                <h2 className='bg-skyBlue rounded-full h-16 w-10 text-lg pl-5 pt-7 text-blue '><BiStoreAlt className=' ' /></h2>
                            </div>
                            <div className='px-4'>
                                <h3 className='font-medium'>User-Friendly Store Setup</h3>
                                <p className='pt-2'>Creating your online store has never been  <br />easier. Quickshop offers a seamless and <br /> intuitive setup process, allowing merchants to <br /> effortlessly showcase their products.</p> 


                            </div>
                        </div>
                        <div className='flex  border-1 border-gray rounded-xl p-4'>
                            <div className='flex justify-center'>
                                <h2 className='bg-lightOrange rounded-full h-16 w-10 text-lg pl-5 pt-7 text-orange-300'><AiOutlineInbox /></h2>
                            </div>
                            <div className='px-4'>
                                <h3 className='font-medium'>Secure Payment Options</h3>
                                <p className='pt-2'>Creating your online store has never been  <br />easier. Quickshop offers a seamless and <br /> intuitive setup process, allowing merchants to <br /> effortlessly showcase their products.</p> 


                            </div>
                        </div>
                    </div>

                    <div className='flex justify-evenly mx-32 mt-10'>
                        <div className='flex  border-1 border-gray rounded-xl p-4'>
                            <div className='flex justify-center'>
                                <h2 className='bg-lightGreen rounded-full h-16 w-10 text-lg pl-5 pt-7 text-darkGreen'><IoBagOutline /></h2>
                            </div>
                            <div className='px-4'>
                                <h3 className='font-medium'>Secure Payment Options</h3>
                                <p className='pt-2'>Creating your online store has never been  <br />easier. Quickshop offers a seamless and <br /> intuitive setup process, allowing merchants to <br /> effortlessly showcase their products.</p> 


                            </div>
                        </div>
                        <div className='flex border-1 border-gray rounded-xl p-4'>
                            <div className='flex justify-center '>
                                <h2 className='bg-lightPurple rounded-full h-16 w-10 text-lg pl-5 pt-7 text-darkPurple'><LuGanttChartSquare /></h2>
                            </div>
                            <div className='px-4'>
                                <h3 className='font-medium'>Secure Payment Options</h3>
                                <p className='pt-2'>Creating your online store has never been  <br />easier. Quickshop offers a seamless and <br /> intuitive setup process, allowing merchants to <br /> effortlessly showcase their products.</p> 


                            </div>
                        </div>

                    </div>

                    
                    


                </div>


            </div>
            
            
        </div>



        <div className=' ml-24 '>
            <div className=' flex justify-between pt-48 '>
                <div className=' mx-16 pt-14'>
                    <h2 className='text-3xl font-medium'>Some <span className='text-red'>top questions</span> <br />Merchants ask.</h2>
                    <p>We have answered this question for you.</p>
                </div>
                    
                    
                    
                <div>
                    {
                     accordion.map((items)=>{
                        return(

                            <div className=''>
                                <div className=''>
                                    <div>
                                        <div className=' mt-10' onClick={HandleAccordion}>
                                            <div className=' flex items-center justify-between pt-4' >
                                                <h2 className='inline-block'>{items.title}</h2>
                                                    {showAccordion ? (
                                                         <h2 className="text-sm  mx-48 "><IoIosArrowForward /></h2>
                                                                 
                                                        ):(
                                                        <h2 className="text-sm  mx-48 "><IoIosArrowDown /></h2> 

                                                    )}
                                                            

                                            </div>
                                                        

                                        </div>
                                        {showAccordion && (
                                            <div className='py-4'>
                                                <h2 className=''>{items.description}</h2>
                                                        
                                            </div>

                                        )}

                                        <div className='border-b-1 border-gray py-4 w-60'></div>

                                    </div>
                                               
                                                

                                </div>
                            </div>


                        )
                                    

                                
                    })
                }

            </div>
                        
                           
                                
                                
                                


                            
                                
                            
                        
                    
            </div>
            
        </div>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Merchant
