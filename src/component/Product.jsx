import React from 'react'
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ProductImage = [
   

    {
        id:1,
        images:'./images/yellow.jpg',
        title:'the inyene heel',
        Price: '#15,000'
    },
    {
        id:2,
        images:'./images/gold.jpg',
        title:'the inyene heel',
        Price: '#15,000'
    },
    {
        id:3,
        images:'./images/yellow.jpg',
        title:'the inyene heel',
        Price: '#15,000'
    },
    {
        id:4,
        images:'./images/gold.jpg',
        title:'the inyene heel',
        Price: '#15,000'
    },
    {
        id:5,
        images:'./images/yellow.jpg',
        title:'the inyene heel',
        Price: '#15,000'
    },
    {
        id:6,
        images:'./images/gold.jpg',
        title:'the inyene heel',
        Price: '#15,000'
    },
    {
        id:7,
        images:'./images/yellow.jpg',
        title:'the inyene heel',
        Price: '#15,000'
    },
    {
        id:8,
        images:'./images/gold.jpg',
        title:'the inyene heel',
        Price: '#15,000'
    },

    
]

const FeaturedProduct = ({type}) => {
  return (
    <div>
        
    <div className='mt-32 '>
        <div className='fonts-sans pb-10 pl-24 mt-48 text-4xl font-medium'>
            <h2 className='text-xl'>{type} Product</h2>
        </div>
        <div className='mx-16 flex grid items-center grid-cols-4 flex-wrap'>
            {
                ProductImage.map((product)=>(
                    <div className=''>
                        <div className='mx-4 '>
                            <Link to={'/AllProduct'}>
                                <div className='flex justify-center px-2 py-4'>
                                    <img src={product.images} className='w-full rounded-xl' alt="" />
                                    
                                </div>
                            </Link>
                            
                            <div className='font-medium '>
                                <h2>{product.title}</h2>
                                <h2>{product.Price}</h2>
                                

                            </div>
                            <div className='flex items-center '>
                                <h2>By <span className='border-b '>thewasolastore</span></h2>
                                <h2 className='bg-orange-50 rounded-full py-2 px-4 ml-4'><FaRegStar className='inline-block  text-red ' />(0)</h2>


                            </div>
                           
                            
                        </div>
                    </div>

                ))

            }
            
                 
           
            
        </div>
        {/* <div className='flex justify-center my-10'><button className='bg-dark-green px-7 hover:text-black pointer py-2 font-medium text-white transition duration-500 ease-in-out rounded'><Link to='/product'>Shop Now</Link></button></div>  */}
                

    </div>
    
</div>
  )
}

export default FeaturedProduct