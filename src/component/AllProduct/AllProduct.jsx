import React, {useState} from 'react'
import { RxSlash } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { IoIosArrowDown} from "react-icons/io"
import Footer from '../Footer/Footer';
import { FaRegStar } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import Data from '../Data'
import logo from '../Images/cN1g46Vw_400x400.png'
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import clsx from  'clsx';
import { IoCloseOutline } from "react-icons/io5";
import Menu from '../Menu/Menu'




const AllProduct = ({product}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)  
    const [products ] = useState(Data)
    const [visible, setVisible] = useState(5);
    const [hidden, setHidden] = useState("block");
    


    // const HandleToCart = (item) => {
    //     setProducts([{...item}])
    // };

  
    const ShowMore = () => {
        setVisible((prev) => prev + 5);
        setHidden("hidden");
    

    };







    return (
    <div>
         <div>
                <div>
                    <div className=''>
                        <div className='flex justify-between items-center mx-20 my-6'>

                            <div className=''>
                                <div className='flex items-center  '>
                                    <img src={logo} alt="" className='w-10 inline-block '/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2>

                                    <div className='mx-10 h-12 relative flex items-center focus-within:text-black '>
                                        <IoSearchOutline  className='absolute ml-4 pointer-events-none'/>
                                        <input type="text" className='pl-10 h-10 w-100 border-2 border-gray rounded-md px-32  outline-none' placeholder='Search for any Product'/>
                                    
                               
                                     </div>  

                                </div>
                                
                            </div>
                            <div className=''>
                                <div className='flex items-center ml-10'>
                                    <button className='bg-orange-100 text-red font-medium py-2 px-6 rounded-md'>Sell on QuickShop</button>
                                    <div className='flex mx-10 cursor-pointer' onClick={()=> setIsMenuOpen(true)} >
                                        <Link to="/" className='relative'>
                                            <CiShoppingCart size={20}/>
                                   
                                        </Link>
                                        <div className='-mt-2 absolute mx-2 flex '>
                                   
                                            <p className='bg-red flex items-center justify-center w-4 h-4 rounded-full inline-block '><span className='p-2 text-xs text-white font-medium'></span></p>
                                            
                                            <div className=''>
                                                <h2 className='text-sm pt-2 '>Cart</h2>

                                            </div>
                                    
                                    
                                        </div>
                                        
                        
                                

                                
                             
                                    </div>
                                    <div className='flex mx-10'>
                                        <h2 className=''><GoPerson size={20} /></h2>
                                        <div className=''>
                                            <h3 className='text-sm'>Account</h3>
                                

                                        </div>
                                       
                                
                                
                                    </div>
                                    
                                    

                                </div>
                                
                        
                            </div>
                    

                        </div>
                
            

                    </div>
           
                </div>
            </div>
            
        
            

        
        <div className='flex items-center ml-24'>
            <div className='hover:text-red '>
                <Link to='/'>Home</Link>
                
            </div>
            <div className=''>
                <span className='inline-block'><RxSlash /></span>
                <div className='hover:text-red inline-block'>
                    <Link to='/MarketPlace'>MarketPlace</Link>

                </div>
                <span className='inline-block'><RxSlash /></span>
                <div className='hover:text-red inline-block'>
                    <Link to='/Merchant'>Merchant</Link>

                </div>
                {/* <span className='inline-block'><RxSlash /></span>
                <div className='hover:text-red inline-block'>
                    <Link to='/Merchant'>Merchant</Link>

                </div> */}
                <span className='inline-block'><RxSlash /></span>
                <div className='hover:text-red inline-block'>
                    <Link to='/Blog'>Blog</Link>

                </div>
               
                
            </div>
        </div>
        <div className='flex justify-between mx-20 pt-6 mb-10'>
            <div>
                <b className='text-2xl'>Shoes</b>
            </div>
            <select name="" id="" className='border-2 border-gray rounded-2xl '>
                <option value="" className=''>Most Recent</option>
            </select>
        </div>

        <div className='grid grid-cols-[20%,80%] mx-20 '>
            <div className=''>
                <div className='border-1 border-gray rounded-md'>
                    <div className='flex items-center justify-between py-4 border-b border-gray w-full p-2'>
                        <div>
                        <h2 >Categories</h2>   
                        </div>
                        <div><IoIosArrowDown /></div>
                        

                    </div>
                    <div className='pb-4'>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="" >Beauty</label>

                            </div>
                            <div className='text-red'>
                                <input type="radio" name='test' value='' id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Women Fashion</label>

                            </div>
                            <div className='text-red'>
                                <input type="radio" name='test' value='Women Fashion' title='Women Fashion' id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Men Fashion</label>

                            </div>
                            <div className='text-red'>
                            <input type="radio" name='test' value='Men Fashion' title="Men Fashion" id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Electronics</label>

                            </div>
                            <div className='text-red'>
                                <input  type="radio" name='test' value='Electronics' title='Electronics' id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Drinks</label>

                            </div>
                            <div className='text-red'>
                                <input  type="radio" name='test' value='Drinks' title='Drinks' id='regular' />
                            </div>
                        </div>
                        
                        
                    </div>

                    

                </div>
                <div className='border-1 border-gray rounded-md mt-4 '>
                    <div className='flex items-center justify-between py-4 border-b border-gray w-full p-2  '>
                        <div>
                            <h2>Sub-Categories</h2>   
                        </div>
                        <div><IoIosArrowDown /></div>
                        

                    </div>
                    <div className='pb-4 overflow-hidden'>
                        <div className='flex items-center justify-between p-2 overflow-hidden'>
                            <div>
                                <label htmlFor="">Shirts</label>

                            </div>
                            <div className='text-red'>
                                <input type="radio" name='test2' value='Shirts' title="Shirts" id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Shoes</label>

                            </div>
                            <div className='text-red'>
                                <input type="radio" name='test2' value='Shirts' title="Shirts" id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Dresses</label>

                            </div>
                            <div className='text-red'>
                                <input type="radio" name='test2' value='Dresses' title='Dresses' id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">bags</label>

                            </div>
                            <div className='text-red'>
                                <input type="radio" name='test2' value='Bags' title='Bags' id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Skirts</label>

                            </div>
                            <div className='text-red'>
                                <input type="radio" name='test2' value='Skirts' title='Skirts' id='regular' />
                            </div>
                        </div>
                        
                        
                    </div>

                    

                </div>
            </div>
            <div>
        
            
        
        <div className='grid grid-cols-3 gap-2 ml-20 '>

        {
            products.slice(0, visible)?.map((product)=>{
           
                return(
                     
                        <div className=''>
                            <div className=''>
                            <div key={product.id}  className=''>
                                <div>
                                    <Link to={`/product/${product.id}`}>
                                        <div className='hover:scale-100'>
                                            <img src={product.image} alt="" className='rounded-xl h-15 w-100 hover:scale-100' />
                                        </div>

                                    </Link>
                                    

                                    <div>
                                        
                                        <p className='text-lg pt-4'>{product.name}</p>
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
              
          <div className='flex justify-center items-center mt-24'>
            <div className={`border-1 border-gray py-2 px-6 rounded-md ${hidden}`}>
              <button onClick={ShowMore}>Show More</button>
            </div>
                  
          </div>
                       
          
        
        
    </div>
        
                {/* <FashionImage/> */}
                {/* <Header/> */}
            
            
           
        </div>
        <Footer/>
        <div className={clsx('fixed bg-black/10  transition-all backdrop-blur-sm top-0 right-0 w-full h-full -translate-x-full', isMenuOpen && 'translate-x-0')}>
            <div className='text-black bg-white absolute right-0 top-0 h-screen w-30 z-50 flex justify-between py-6 '>
                <div className='flex'>
                    <div>
                        Home <span className='inline-block'><RxSlash/></span>
                    </div>
                    <div>
                        <h2 className='text-red'>Cart</h2>
                    </div> 
                    {/* <div className='text-red'>{product.name}</div> */}
                
                </div>
                {/* <div>
                    <h4 className='text-2xl text-black'>Your Cart</h4>
                </div> */}
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

        
        

    </div>
  )
}

export default AllProduct