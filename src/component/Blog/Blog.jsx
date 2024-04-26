import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Subscribe from '../Subscribe/Subscribe'

const quickImage =[
    {
        images:'./images/nude.png',
        title:'Article Title',
        description:'Afew words to describe the content of this very insightful article',
    },
    {
        images:'./images/nude.png',
        title:'Article Title',
        description:'Afew words to describe the content of this very insightful article',
    },
    {
        images:'./images/nude.png',
        title:'Article Title',
        description:'Afew words to describe the content of this very insightful article',
    },
    {
        images:'./images/nude.png',
        title:'Article Title',
        description:'Afew words to describe the content of this very insightful article',
    },
    {
        images:'./images/nude.png',
        title:'Article Title',
        description:'Afew words to describe the content of this very insightful article',
    },
    {
        images:'./images/nude.png',
        title:'Article Title',
        description:'Afew words to describe the content of this very insightful article',
    },
]

const Blog = () => {
  return (
    <div>
        <div>
            <Navbar/>
            <div className='text-center pt-32 pb-10'>
                <h2 className='text-3xl font-normal '>The Quick Blog</h2>
                <p className='pt-4'>We have curated helpful articles for all Quickshop users. Sit back and <br /> get familiar with the product.</p>
            </div>
            <div>
                <div className='grid grid-cols-3 mx-24'>
                   {
                    quickImage.map((product)=>(
                        <div className=''>
                            <div className=''>
                                <div className='bg-amber h-35 mx-2'>
                                    <img src={product.images}alt=""  className='h-14 w-full rounded-2xl' />
                                </div>
                                <div>
                                    <h2 className='pt-10'>{product.title}</h2>
                                    <p className='pb-4'>{product.description}</p>
                                </div>

                            </div>
                            
                        </div>



                    ))
                   } 

                </div>
            </div>
        </div>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Blog