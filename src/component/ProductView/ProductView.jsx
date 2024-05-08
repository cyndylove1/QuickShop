
import React from 'axios'
import { useState } from 'react'
import Data from '../Data'
import { useParams } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";
import logo from '../Images/cN1g46Vw_400x400.png'
import { IoSearchOutline } from "react-icons/io5";
import { RxSlash } from "react-icons/rx";
import { IoIosArrowDown} from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../State/CartSlice';
import clsx from  'clsx';
import { IoCloseOutline } from "react-icons/io5";
import Menu from '../Menu/Menu'


const ProductView = () => {
  const {amount} = useSelector((state)=>state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)  
    // const product = useSelector((state)=>state.cart)
    const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(1)
  const {productId} = useParams()
  console.log(productId)
  const product = Data.find((e)=>e.id === Number(productId))
  console.log(product)
    
  const [activeImg, setActiveImg] =useState(product.image)

  const handleDecrement = () =>{
    setQuantity(prevCount => prevCount - 1)

  }
  const handleIncrement = () =>{
    setQuantity(prevCount => prevCount + 1)

  }

    
  return (
    <div className=''>
      <div>
      <div>
        <div>
          <div>
            <div className=''>
              <div className='flex items-center justify-center justify-between mx-20 my-6'>

                <div className=''>
                  <div className=' flex items-center'>
                    <img src={logo} alt="" className='inline-block w-10'/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2>

                    <div className='focus-within:text-black relative flex items-center h-12 mx-20'>
                      <IoSearchOutline  className='absolute ml-4 pointer-events-none'/>
                      <input type="text" className='w-100 border-gray h-10 px-32 pl-10 border-2 rounded-md outline-none' placeholder='Search for any Product'  />
                                    
                               
                    </div>  

                  </div>
                                
                </div>
                <div>
                
                      
                  <div className='ml-6' onClick={()=> setIsMenuOpen(true)}> 
                    <h2><span><CiShoppingCart className='inline-block mr-2' /></span>Cart <span className='text-red'>({amount})</span></h2>
                  </div>

                  
                        
                </div>
                    
    
              </div>
                
            

            </div>
           
          </div>
        </div>
            

      </div>
      

      <div className={clsx('fixed bg-black/10 t  transition-all backdrop-blur-sm top-0 right-0 w-full h-full -translate-x-full', isMenuOpen && 'translate-x-0')}>
            <div className='text-black bg-white absolute right-0 top-0 h-screen w-30 z-50   '>
              <div>
                <div className='flex justify-between'>
                  <div>
                        <div className='flex '>
                              Home <span className=''><RxSlash/></span>
                        </div>
                          <div className='flex'>
                              <h2 className='text-red'>Cart</h2>
                          </div> 

                    </div>
                      
                      <div className=''>
                       <IoCloseOutline onClick={()=>setIsMenuOpen(false)} className='text-2xl'/>
                    

                      </div>
                      
                  
                  </div>
                  

              </div>

              <div>
            {
                Data.length === 0 ? (
                    <div>
                        <h2>Your Cart is Empty</h2>
                        <button>Shop Now</button>
                    </div>
                ):(
                    <div>
                        {Data.map((item)=>{
                            return(
                                <Menu key={item.id} 
                                item = {item}/>
                            )
                        })}

                    </div>
            )}
        </div>

        
        
                
                {/* <div>
                    <h4 className='text-2xl text-black'>Your Cart</h4>
                </div> */}
                
          
                
            </div>
           
        </div>

       
        
            
      <div className='flex mx-20'>
        <div>
           Home <span className='inline-block'><RxSlash/></span>
        </div>
        <div>
          shop <span className=' inline-block'><RxSlash/></span>
        </div> 
          <div className='text-red'>{product.name}</div>
                
      </div>
            

           
  </div>
       
          <div className='flex mb-10'>
            <div>
              <div className='flex flex-col justify-between mx-20 mt-10'>
                    <div className=''>
                      <img src={activeImg} alt="" className='aspect-square object-cover rounded-2xl h-78 w-100' />
                    </div>
                    <div className=' flex flex-row h-16 cursor-pointer'>
                      <img src={product.image} alt="" className=' w-32 h-24 m-4 rounded-md' onClick={()=>setActiveImg(product.image)}/>
                      <img src={product.img2} alt="" className=' w-32 h-24 m-4 rounded-md' onClick={()=>setActiveImg(product.img2)}/>
                      <img src={product.img3} alt="" className=' w-32 h-24 m-4 rounded-md' onClick={()=>setActiveImg(product.img3)}/>
                      {/* <img src={image.img4} alt="" className=' w-32 h-24 m-4 rounded-md' onClick={()=>setActiveImg(image.img4)}/> */}
                      
                    </div>

                </div>

            </div>
            
            <div className='mx-4 mt-10'>
              <h2 className='text-sm'>Sold by <span className='text-red underline'>thewasolastore</span></h2>
              <h2 className='text-lg font-normal pt-4 pb-2'>{product.name}</h2>
              <h2 className='font-medium'>&#8358;{product.Price}</h2>
              {/* <div className='border-b-1 border-gray'></div> */}


              <div className='py-6'>
              <div className='border-b-1 border-gray'></div>
                <b><h3 className='text-xs pt-6'>Quantity</h3></b>
                <div>
                  <div className='flex border-b-1 border-gray items-center py-4'>
                    <div className=' border-1 border-gray rounded-2xl flex'>
                      <button type='button' className='w-10 h-8' onClick={handleDecrement}>-</button>
                      <div className='w-10 form-control text-center pt-1'>{quantity}</div>
                      <button type='button' className='w-10'  onClick={handleIncrement}>+</button>

                    </div>
                    <div>
                      <h2 className='text-xs mx-3'>Only <span className='text-red font-medium'>12 items </span>Left! <br /> Don't miss it</h2>
                    
                    </div>
                    
                    

                  </div>
                </div>
                
              </div>
              <div className='flex '>
                <div className='w-61 h-12'>
                  <label htmlFor="">Color</label><br />
                  <select name="" id="" className='w-100 border-1 border-gray h-10 outline-none rounded-xl'>
                    <option value="">Select a Color</option>
                    <option value="">White</option>
                    <option value="">Orange</option>
                    <option value="">Yellow</option>
                  </select><br />
                </div>

                <div className='w-61 h-12 mx-2'>
                  <label htmlFor="" className=''>Size</label><br />
                  <select name="" id="" className='w-100 border-1 border-gray h-10 outline-none rounded-xl'>
                    <option value="">Select a Size</option>
                    <option value="">41</option>
                    <option value="">45</option>
                    <option value="">52</option>
                  </select><br />
                </div>
              </div>

              <div className='text-center w-100 mt-12 bg-gradient-to-r from-red to-orange py-2 rounded-md mb-4 text-white'>
                <button onClick={()=> dispatch(add(Data))}>Add to Cart</button>
                {/* <div className='border-b-1 border-gray mb-4'></div> */}
                    

              </div>
              <div className='flex items-center justify-between mt-3 border-t-1 border-gray mb-4'>
                <div>
                  <div className=''></div>
                  <h2 className='py-2'>Product Description</h2>
                </div>
                <div>
                <IoIosArrowDown />
                </div>
              </div>
              <p className='text-sm pb-2'>Praised by the streets for its classic simplicity and <br /> comfort, the Nike Blazer Low '77 Vintage returns with its <br /> low-profile style and heritage b-ball looks.</p>
              <div className='border-b-1 border-gray'></div>
            </div>
            
          </div>

          

        
          

      
        
            
    </div>
  )
}

export default ProductView