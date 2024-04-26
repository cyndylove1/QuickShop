import React from 'react'
import { FaRegStar } from "react-icons/fa6";
const Image = [
   
    {
        images:'./images/yellow.jpg',
        title:'the inyene heel',
        Price: '#15,000'
    },
    {
        images:'./images/gold.jpg',
        title:'the inyene heel',
        Price: '#15,000'
    },
    {
        images:'./images/yellow.jpg',
        title:'the inyene heel',
        Price: '#15,000'
    },
    {
        images:'./images/gold.jpg',
        title:'the inyene heel',
        Price: '#15,000'
    },
    {
        images:'./images/yellow.jpg',
        title:'the inyene heel',
        Price: '#15,000'
    },
    {
        images:'./images/gold.jpg',
        title:'the inyene heel',
        Price: '#15,000'
    },
    {
        images:'./images/yellow.jpg',
        title:'the inyene heel',
        Price: '#15,000'
    },
    {
        images:'./images/gold.jpg',
        title:'the inyene heel',
        Price: '#15,000'
    },
    {
        images:'./images/yellow.jpg',
        title:'the inyene heel',
        Price: '#15,000'
    },

    
]

const FashionImage = () => {
  return (
    <div className=''>
        <div className='grid grid-cols-3 gap-2 ml-20'>

        {
            Image.map((product)=>{
                return(
                    
                        <div className=''>
                            <div className=''>
                            <div className=''>
                                <div>
                                    <div>
                                        <img src={product.images} alt="" className='rounded-xl h-13 w-100' />
                                    </div>

                                    <div>
                                        <p className='text-lg pt-4'>{product.title}</p>
                                        <b className='py-2 text-xl font-medium'>{product.Price}</b>
                                    </div>
                                    <div className='flex items-center pb-6'>
                                        <h2>By <span className='border-b '>thewasolastore</span></h2>
                                        <h2 className='bg-orange-50 rounded-full py-2 px-4 ml-4'><FaRegStar className='inline-block  text-red ' />(0)</h2>


                                    </div>

                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                    

                )
            })
        }

        </div>
        
        
    </div>
  )
}

export default FashionImage