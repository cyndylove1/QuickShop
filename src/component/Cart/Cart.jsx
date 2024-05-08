import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IoCloseOutline } from "react-icons/io5";
import Modal from 'react-modal';
import { AiTwotoneDelete } from "react-icons/ai";
import productData  from '../Data'
import { useState } from 'react';
import { RxSlash } from "react-icons/rx";
import { Link } from 'react-router-dom';
import clsx from  'clsx';
// import {  useDispatch } from 'react-redux'
// import { IoCloseOutline } from "react-icons/io5";
// import { RxSlash } from "react-icons/rx";



import{
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
}from '../State/index'
// import { useNavigate } from 'react-router-dom';
// const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//     },
//   };
  
// 


const Cart = () => {
    const dispatch = useDispatch()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    // const [quantity, setQuantity] = useState(1)
    // const handleDecrement = () =>{
    //     setQuantity(prevCount => prevCount - 1)
    
    //   }
    //   const handleIncrement = () =>{
    //     setQuantity(prevCount => prevCount + 1)
    
    //   }
    

    // const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const cart = useSelector((state)=>state.cart.cart)
    // const isCartOpen = useSelector((state)=>state.cart.isCartOpen)
    // const totalPrice = cart.reduce((total,item)=>{
    //     return total + item.count * total.Price

    // }, 0)
  return (
    <div>
        <div className={ clsx('fixed bg-black/50 opacity-50 transition backdrop-blur-sm top-0 right-0 w-full h-full -translate-x-full', isMenuOpen && 'translate-x-0')}>
            <div className='text-black bg-white absolute right-0 top-0 h-screen w-30 z-50 flex justify-between '>
            <div className='flex'>
                <div>
                    Home <span className='inline-block'><RxSlash/></span>
                </div>
                <div>
                   Cart 
                </div> 
                {/* <div className='text-red'>{product.name}</div> */}
                
            </div>
                {/* <div>
                    <h4 className='text-2xl text-black'>Your Cart</h4>
                </div> */}
                <div className='' onClick={()=> dispatch(setIsCartOpen({}))}>
                    <IoCloseOutline onClick={()=>setIsMenuOpen(false)} className='text-2xl'/>
                    

                </div>
                
            </div>
        </div>
        
           
    </div>
  )
}

export default Cart