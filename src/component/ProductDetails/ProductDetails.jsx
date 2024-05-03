// import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import logo from '../Images/cN1g46Vw_400x400.png'
import { IoSearchOutline } from "react-icons/io5";
import { RxSlash } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import ProductView from "../ProductView/ProductView";
import { useParams } from 'react-router-dom';


// import silver from '../Images/gold (3).png'
const Image = [

   
  {
      id:1,
      images:'./images/yellow.jpg',
      title:'the inyene heel',
      Price: '#15,000',
      name:'heel',
  },
  {
      id:2,
      images:'./images/images (3).png',
      title:'the inyene heel',
      Price: '#15,000',
      name:'skirt',
  },
  {
      id:3,
      images:'./images/dress.webp',
      title:'the inyene heel',
      Price: '#15,000',
      name:'heel',
  },
  {
      id:4,
      images:'./images/T-Shirt.webp',
      title:'the inyene heel',
      Price: '#15,000',
      name:'heel',
  },
  {
      id:5,
      images:'./images/images (4).jpg',
      title:'the inyene heel',
      Price: '#15,000',
      name:'heel',
  },
  {
      id:6,
      images:'./images/T-Shirt.webp',
      title:'the inyene heel',
      Price: '#15,000',
      name:'heel',
  },
  {
      id:7,
      images:'./images/dress.webp',
      title:'the inyene heel',
      Price: '#15,000',
      name:'heel',
  },
  {
      id:8,
      images:'./images/yellow.jpg',
      title:'the inyene heel',
      Price: '#15,000',
      name:'heel',
  },
  {
      id:9,
      images:'./images/images (4).jpg',
      title:'the inyene heel',
      Price: '#15,000',
      name:'heel',
  },

  
]


const ProductDetails = () => {
  const {ProductDetails} = useParams()
  const props = Image.find((e)=>e.id === Number(ProductDetails))
  
  
  
  
  return (
    <div>
        
        <div>
            <div className=''>
                <div className='flex items-center justify-center justify-between mx-20 my-10'>

                    <div className=''>
                        <div className=' flex items-center'>
                            <img src={logo} alt="" className='inline-block w-10'/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2>

                            <div className='focus-within:text-black relative flex items-center h-12 mx-10'>
                            <IoSearchOutline  className='absolute ml-4 pointer-events-none'/>
                                <input type="text" className='w-100 border-gray h-10 px-32 pl-10 border-2 rounded-md outline-none' placeholder='Search for any Product'/>
                            </div>  

                        </div>
                                
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <button className='text-red px-6 py-2 font-medium bg-orange-100 rounded-md'>Sell on QuickStore for free</button>
                            <div className='ml-6'> 
                                <h2><span><CiShoppingCart className='inline-block mr-4' /></span>Cart <span className='text-red'>(0)</span></h2>
                            </div>

                        </div>
                        
                    </div>
                    

                </div>
                
            

            </div>

        </div>
        <div className='flex ml-24'>
            <div>
                <h2>Home</h2>
            </div>
            <div className=''>
                <span className='inline-block'><RxSlash /></span>
                <div className='hover:text-red inline-block'>
                    <Link to='/AllProduct'>All-Product</Link>

                </div>
                <span className='inline-block'><RxSlash /></span>
                <div className='hover:text-red inline-block'>
                    <Link to='/Fashion'>Shoes</Link>

                </div>
                <span className='inline-block'><RxSlash /></span>
                <div className='hover:text-red inline-block'>
                    <Link to='/Fashion'>{Image.name}</Link>

                </div>
               
                
            </div>
        </div>
        <div className="">
          <div className= "mx-20 mt-32">
            <div className='flex'>
              
          
            <div className="flex">
              {/* <FashionImage/> */}
              <div>
        <div>
            <div>
                <img src={props}alt="" />
            </div>
            <div>
                <div>
                    {/* <img src={product.} alt="" />
                    <img src={Image.images} alt="" />
                    <img src={Image.images} alt="" />
                    <img src={Image.images} alt="" />
                    <img src={Image.images} alt="" /> */}
                    <img src={props} alt="" />
                    <img src={props} alt="" />
                    <img src={props} alt="" />
                    {/* <img src={product.images} alt="" /> */}
                    {/* <img src={product.images} alt="" /> */}
                </div>
            </div>
        
        </div>
    </div>
             
                <div>
                <div>
                  <div>
                      <h6>Sold by thewasolastore</h6>
                    </div>
                    <div className="">
                      <h5>the Inyene Heels</h5>
                      <b>#15000</b>
                    </div>
                    <div className="flex">

                      <div>
                        <label htmlFor="">Quantity</label>
                        <div className="border-2 border-gray rounded-3xl w-32 h-8">
                          <span className="px-4">-</span>
                          <span className="px-4">0</span>
                          <span className="px-4">+</span>

                        </div>
                        

                      </div>
                      <div>
                        <h5>Only <span>12 items</span>left! <br />Don't miss it</h5> 
                      </div>

                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Color</label><br />
                        <select name="" id="" className="">
                          <option value="">white</option>
                        </select>

                      </div>
                      <div className="px-4">
                        <label htmlFor="">Size</label><br />
                        <div></div>
                          <select name="" id="" className="  h-8 outline-none border-1 px-2 border-gray rounded-lg w-60">
                          <option value="" className="m-2">41</option>
                        </select>

                      </div>

                    </div>
                    

                    
                    
                    

                    
                  </div>
                  
                
              </div>
            </div>
           
              
            {/* <h2>the</h2>
            <h2>the</h2>
            <h2>the</h2>
            <h2>the</h2> */}

          </div>
        </div>
        </div>
        {/* <div>
          <div>
            <img src={sliderData.value} height={300} width={500} alt="" />
            <div className=" flex">
              
              {
                slide.map((data, i)=>{
                  return(
                    <div>
                      <img key={data.id} src={data.value}  onClick={handleClick(i)} height={70} width={100} alt="" />

                    </div>

                  )
                })
              }
            </div>
          </div> */}
        {/* </div> */}
        {/* <div className=" mx-20 mt-32">
          <div className="flex">
            
         
          <div className="">
            <Carousel className="h-30 w-40">
              
              <div>
                <img src={heel} alt="" className="rounded-xl" />
              </div>
              <div>
                <img src={heel} alt=""  className="rounded-xl"/>
              </div>
              <div>
                <img src={heel} alt="" className="rounded-xl" />
              </div>
              <div>
                <img src={heel} alt="" className="rounded-xl" />
              </div>

            </Carousel>


          </div>
          <div className="">
          <div>
            <h6>Sold by <span className="inline-block">thewasolastore</span></h6>
          </div>
          <div className="">
            <h5>the Inyene Heels</h5>
            <b>#15000</b>
          </div>
          <label htmlFor="">Quantity</label>
        </div>
       

          

        </div>
        </div>
         */}
        
        
    </div>
  )
}

export default ProductDetails