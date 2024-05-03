import React, {useState, useContext} from 'react'
import { RxSlash } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { IoIosArrowDown} from "react-icons/io"
import Footer from '../Footer/Footer';
import { FaRegStar } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import logo from '../Images/cN1g46Vw_400x400.png'
import { IoSearchOutline } from "react-icons/io5";
import Data from '../Data'
import {ShopContext} from '../Context/ShopContext'

const AllProduct = ({product}) => {
    const {Data} = useContext(ShopContext)


    const [openDrop, setOpendrop] = useState(false);
    const [details, setDetails] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [products , setProducts] = useState(Data)
    const [query, setQuery] = useState("");
    const [visible, setVisible] = useState(5);
    const [hidden, setHidden] = useState("block");
    const title = ["Categories", "Sub-Categories"];



const HandleToCart = (item) => {
    setDetails([{...item}])
  };

  const handleDrop = (index) => {
    title.forEach((item, id) => {
      if (index === id) {
        return setOpendrop(!openDrop);
      }
    });
}
const handleFilters = (cate) => {
    const results = product.filter((prd) => {
      return prd.category === cate;
    });
    setProducts(results);
    setHidden("hidden");
    if (isChecked) {
      setProducts(product);
    }
  };
  

const handleSearch = (e) => {
setQuery(e.target.value);

if (e.target.value.length > 0) {
  setHidden("hidden");
} else {
  setHidden("block");
}
};



const ShowMore = () => {
    setVisible((prev) => prev + 5);
    setHidden("hidden");
    

};




const handleClick = () => {
setIsChecked(!isChecked);


};
const hgh = (e) => {
const val = e.target.value;

const results = product.filter((prd) => {
  return prd.category === val;
});
if (val === "all") {
  return setProducts(product);
}
return setProducts(results);
};
//   const drop = openDrop ? "block" : "hidden";





    return (
    <div>
        <div>
            <div>
                <div>
                    <div>
                        <div className='flex justify-between items-center justify-center mx-20 my-6'>

                            <div className=''>
                                <div className='flex items-center '>
                                    <img src={logo} alt="" className='w-10 inline-block'/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2>

                                <div className='mx-10 h-12 relative flex items-center focus-within:text-black '>
                                    <IoSearchOutline  className='absolute ml-4 pointer-events-none'/>
                                    <input type="text" className='pl-10 h-10 w-100 border-2 border-gray rounded-md px-32  outline-none' placeholder='Search for any Product' onChange={(e)=> handleSearch(e)} />
                                    
                               
                                </div>  

                            </div>
                                
                        </div>
                    <div>
                                <div className='flex items-center'>
                                    <button className='bg-orange-100 text-red font-medium py-2 px-6 rounded-md'>Sell on QuickStore for free</button>
                                    <div className='ml-6'> 
                                        <h2><span><CiShoppingCart className='inline-block mr-4' /></span>Cart <span className='text-red'>(0)</span></h2>
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
            <div className='' value={(e) => e.target.value} onChange={(e) => hgh(e)}>
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
                                <input onClick={()=>handleFilters('Beauty')} type="radio" name='test' value='' id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Women Fashion</label>

                            </div>
                            <div className='text-red'>
                                <input onClick={()=>handleFilters('Women Fashion')} type="radio" name='test' value='Women Fashion' title='Women Fashion' id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Men Fashion</label>

                            </div>
                            <div className='text-red'>
                            <input onClick={()=> handleFilters('Men Fashion')}type="radio" name='test' value='Men Fashion' title="Men Fashion" id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Electronics</label>

                            </div>
                            <div className='text-red'>
                                <input onClick={()=> handleFilters('Electronics')} type="radio" name='test' value='Electronics' title='Electronics' id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Drinks</label>

                            </div>
                            <div className='text-red'>
                                <input onClick={()=>handleFilters("Drinks")} type="radio" name='test' value='Drinks' title='Drinks' id='regular' />
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
                                <input onClick={()=> handleFilters('Shirts')} type="radio" name='test2' value='Shirts' title="Shirts" id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Shoes</label>

                            </div>
                            <div className='text-red'>
                                <input onClick={()=> handleFilters('Shoes')} type="radio" name='test2' value='Shirts' title="Shirts" id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Dresses</label>

                            </div>
                            <div className='text-red'>
                                <input onClick={()=> handleFilters('Dresses')} type="radio" name='test2' value='Dresses' title='Dresses' id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">bags</label>

                            </div>
                            <div className='text-red'>
                                <input onClick={()=> handleFilters('bags')}type="radio" name='test2' value='Bags' title='Bags' id='regular' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <div>
                                <label htmlFor="">Skirts</label>

                            </div>
                            <div className='text-red'>
                                <input onClick={()=> handleFilters('Skirts')} type="radio" name='test2' value='Skirts' title='Skirts' id='regular' />
                            </div>
                        </div>
                        
                        
                    </div>

                    

                </div>
            </div>
            <div>
        
            
        
        <div className='grid grid-cols-3 gap-2 ml-20 '>

        {
            products ?.slice(0, visible)?.map((product)=>{
           
                return(
                     
                        <div className=''>
                            <div className=''>
                            <div key={product.id}  className=''>
                                <div>
                                    <Link to={`/ProductView${product.id}`}>
                                        <div className='hover:scale-100'>
                                            <img src={product.image} alt="" className='rounded-xl h-15 w-100 hover:scale-100'  onClick={()=>(HandleToCart(product))}/>
                                        </div>

                                    </Link>
                                    

                                    <div>
                                        <p className='text-lg pt-4'>{product.title}</p>
                                        {/* <p className='text-lg pt-4'>{product.name}</p> */}
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
    </div>
  )
}

export default AllProduct