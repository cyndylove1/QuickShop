import React, { useState } from 'react'
import hero from '../Images/Merchant Image on Home Screen (1).png'
import hero2 from '../Images/Buyer Hero - Homepage.png'
import Subscribe from '../Subscribe/Subscribe'
import Footer from '../Footer/Footer'
import slider from '../Images/binh-ly-k_4A59MzZTY-unsplash.jpg'
import slide from '../Images/Merchant Colorful Shape - Homepage (4).png'
import slide2 from '../Images/Buyer Colorful Pill - Homepage.png'
import Marquee from "react-fast-marquee";
import { GiStarShuriken } from "react-icons/gi";
import Navbar from '../Navbar/Navbar';
import shape1 from '../Images/Colorful Shape 1 - Sell Smart (1).png'
import shape2 from '../Images/Colorful Shape 2- List & Sell.png'
import shape3 from '../Images/Colorful Shape 3 - Boost your Sales (1).png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Seller from '../Seller/Seller';
import Buyer from '../Buyer/Buyer';






const Home = () => {
    const [visible, setVisible] = useState(true)
    const [showData, setShowData] = useState(false)

    const handleClick = () => {
        setVisible(true)
        setShowData(false)
    }
    const handleToggle = () => {
        setVisible(false)
        setShowData(true)
    }
    
    
  return (
    
    <div className=''>
        <div className='bg-amber h-98'>
            <Navbar/>
            
            <div className='flex justify-between mx-20 h-98 '>
                <div className='py-32'>
                    <h2 className='text-5xl font-medium'>Make<span className='text-red'> extra money <br /></span> on Quickshop</h2>
                    <h6 className='py-6 font-thin'>Sell your products globally with the click of a button.</h6>
                    <div className='flex items-center font-medium'>
                        <div>
                            <button className='py-3 px-10  bg-gradient-to-r from-red to-orange rounded-xl text-white'>Get Started</button>
                        </div>
                        <div>
                            <button className='py-3 px-10 bg-orange-100 ml-4 rounded-xl text-red'>Contact Sales</button>
                        </div>
                    </div>


                </div>
                <div className='w-99 h-78 py-10 rounded relative'>
                    <div className='relative'>
                        <div className='relative ml-10'>
                            <img src={hero} alt="" className='h-78  rounded-2xl ml-10' />

                        </div>
                        
                        <div className='absolute -mt-24'>
                            <img src={shape1} alt="" className='pr-25 '  />
                        
                        </div>
                        <div className='absolute -mt-16 '>
                            <img src={shape2} alt="" className='w-31 ml-45'  />
                        
                        </div>
                        <div className='absolute -mt-35 '>
                            <img src={shape3} alt="" className='ml-31 w-20'  />
                        
                        </div>

                    </div>
                    
                    

                </div>
                
            </div>

        </div>




           
        <div className='flex justify-between mx-20 '>
            <div className='py-32'>
                <h2 className='text-5xl font-medium'>Need Something? <br /> we've<span className='text-red'> got it all.</span></h2>
                <h6 className='py-6 font-thin'>QuickShop connects you to business and brands <br /> Across Africa.</h6>
                
                <div>
                    <button className='py-3 px-8 bg-gradient-to-r from-red to-orange   rounded-xl text-white font-medium'>Start Shopping &rarr;</button>
                </div>


            </div>
            <div className='w-99 h-78 py-24 rounded '>
                <img src={hero2} alt="" className='h-78 ml-14 ' />

            </div>
 
        </div>



        <Marquee behavior="scroll" direction="left" className="mt-32 bg-orange-50 py-2 ">
            <div className='list-none'>
                <ul className='flex font-thin'>
                    <li className='flex items-center mx-4'>< GiStarShuriken className='text-red '/>SHOES</li>
                    <li className='flex items-center mx-4'>< GiStarShuriken className='text-red '/>BAGS</li>
                    <li className='flex items-center mx-4'>< GiStarShuriken className='text-red '/>SHORTS</li>
                    <li className='flex items-center mx-4'>< GiStarShuriken className='text-red '/>DRESSES</li>
                    <li className='flex items-center mx-4'>< GiStarShuriken className='text-red '/>SHRITS</li>
                    <li className='flex items-center mx-4'>< GiStarShuriken className='text-red '/>SHOES</li>
                    <li className='flex items-center mx-4'>< GiStarShuriken className='text-red '/>BAGS</li>
                    <li className='flex items-center mx-4'>< GiStarShuriken className='text-red '/>SHORTS</li>
                    <li className='flex items-center mx-4'>< GiStarShuriken className='text-red '/>DRESSES</li>
                    <li className='flex items-center mx-4'>< GiStarShuriken className='text-red '/>SHRITS</li>
                    

                </ul>
                

            </div>
           
        </Marquee>






        <div className=''>
            <div className='text-center pt-48'>
                <h2 className='font-normal text-3xl'>What you get with Quickshop</h2>
                <h6 className='py-4'>Over 1000 shoppers and merchants trust Quickshop. Join this <br /> community of forward thinking people.</h6>

            </div>
            <div className='flex justify-center mt-32'>
                <div className='border-gray border-1 w-76 rounded-2xl'>
                    <button  onClick={handleClick}className='py-3 px-6 hover:bg-red hover:text-white text-black font-medium rounded-md my-2 mx-2'>For Merchant</button>
                    <button  onClick={handleToggle}className='py-3 px-5 rounded-md my-2 mx-2 hover:bg-red hover:text-white text-black font-medium '>For Buyers</button>
                         
                
                </div>
                

            </div>
                {visible && <Seller/>}
                {showData && <Buyer/>}

            {/* <div className=' pt-24'>
                <div className=' flex mx-64'>
                    <div className=''>
                        <img src={phone} alt="" className=' h-77 w-100' />

                    </div>

                    <div className='list-none pt-4 '>
                        
                        <h2 className='text-sm pl-10 py-2 '><span className=' text-red text-xl'><TiStarburst className='inline-block mx-2'/></span>Sell variety of products</h2>
                        <h2 className='text-sm pl-10 py-2'><span className='text-purple text-xl '><TiStarburst className='inline-block mx-2'/></span>Embedded delivery options</h2>
                        <h2 className='text-sm pl-10 py-2'><span className=' text-green text-xl '><TiStarburst className='inline-block mx-2'/></span>Access to customers</h2>
                        <h2 className='text-sm pl-10 py-2'><span className='text-orange text-xl'><TiStarburst className='inline-block mx-2' /></span>Manage your store on your mobile app </h2>

                        <div className='flex mt-6 pl-10 '>
                            <img src={google}alt="" className='w-24' />
                            <img src={google}alt="" className='w-24' />
                            
                        </div>
                        
                    </div>
                     
                   

                </div>  
                
            </div>
            */}
           
        </div>


           
            <div className='pt-48'>
                <div className='text-center mb-10'>
                    <h2 className='font-normal text-3xl'>What our people are saying.</h2>
                    <h6 className='font-thin py-6'>Over 1000 shoppers and merchants trust Quickshop. Join this <br /> community of forward thinking people.</h6>

                </div>


                <Swiper
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    loop:true,
                    // autoplay:{
                    //     delay:1000,
                    //     disableOnInteraction:false,
                    // },
                    
                
                    
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='pt-32'>
                            <div className='py-10 mx-80 border-1 rounded-2xl border-purple border-solid mb-20 relative'>
                                <div className='flex justify-center py-6 relative'>
                                    <div>
                                        <img src={slider} alt="" className='h-24 w-24 rounded-full' />

                                    </div>
                                    <div className='absolute -mt-36 ml-40 '>
                                        <img src={slide} alt="" className='ml-37 w-99' />
                                    </div>
                                            
                                </div>
                                    <div>
                                        <h5 className='font-thin text-center'>
                                            “ Business is a platform for managing global rides <br /> and meals, and local deliveries, for companies of <br /> any size. Business is a platform for managing <br />global rides and meals, and local deliveries, for <br />companies of any size.“
                                            
                                        </h5>
                                            <h6 className='font-thin text-center py-4'>Oludade Ajiniran, Jupiter Stores</h6>
                                    </div>
                            </div>

                       

                        </div>
                       
                        
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className='pt-32'>
                            <div className='py-10 mx-80 border-1 rounded-2xl border-purple border-solid mb-20 relative'>
                                <div className='flex justify-center py-6 relative'>
                                    <div>
                                        <img src={slider} alt="" className='h-24 w-24 rounded-full' />

                                    </div>
                                    <div className='absolute -mt-36 ml-40 '>
                                        <img src={slide2} alt="" className='ml-37 w-99' />
                                    </div>
                                            
                                </div>
                                    <div>
                                        <h5 className='font-thin text-center'>
                                            “ Business is a platform for managing global rides <br /> and meals, and local deliveries, for companies of <br /> any size. Business is a platform for managing <br />global rides and meals, and local deliveries, for <br />companies of any size.“
                                            
                                        </h5>
                                            <h6 className='font-thin text-center py-4'>Oludade Ajiniran, Jupiter Stores</h6>
                                    </div>
                            </div>

                       

                        </div>
                       
                        
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className='pt-32'>
                            <div className='py-10 mx-80 border-1 rounded-2xl border-purple border-solid mb-20 relative'>
                                <div className='flex justify-center py-6 relative'>
                                    <div>
                                        <img src={slider} alt="" className='h-24 w-24 rounded-full' />

                                    </div>
                                    <div className='absolute -mt-36 ml-40 '>
                                        <img src={slide} alt="" className='ml-37 w-99' />
                                    </div>
                                            
                                </div>
                                    <div>
                                        <h5 className='font-thin text-center'>
                                            “ Business is a platform for managing global rides <br /> and meals, and local deliveries, for companies of <br /> any size. Business is a platform for managing <br />global rides and meals, and local deliveries, for <br />companies of any size.“
                                            
                                        </h5>
                                            <h6 className='font-thin text-center py-4'>Oludade Ajiniran, Jupiter Stores</h6>
                                    </div>
                            </div>

                       

                        </div>
                       
                        
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className='pt-32'>
                            <div className='py-10 mx-80 border-1 rounded-2xl border-purple border-solid mb-20 relative'>
                                <div className='flex justify-center py-6 relative'>
                                    <div>
                                        <img src={slider} alt="" className='h-24 w-24 rounded-full' />

                                    </div>
                                    <div className='absolute -mt-36 ml-40 '>
                                        <img src={slide2} alt="" className='ml-37 w-99' />
                                    </div>
                                            
                                </div>
                                    <div>
                                        <h5 className='font-thin text-center'>
                                            “ Business is a platform for managing global rides <br /> and meals, and local deliveries, for companies of <br /> any size. Business is a platform for managing <br />global rides and meals, and local deliveries, for <br />companies of any size.“
                                            
                                        </h5>
                                            <h6 className='font-thin text-center py-4'>Oludade Ajiniran, Jupiter Stores</h6>
                                    </div>
                            </div>

                       

                        </div>
                       
                        
                    </SwiperSlide>
                    
                    
                </Swiper>
                
            </div>

            <Subscribe/>
            <Footer/>
    </div>
  )
}

export default Home