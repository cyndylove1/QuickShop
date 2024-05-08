import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HiMiniTrash } from "react-icons/hi2";
import {increase} from '../State/CartSlice'
import { useState } from 'react';

const Menu = ({item}) => {
    const [quantity, setQuantity] = useState(1)

    const handleDecrement = () =>{
        setQuantity(prevCount => prevCount - 1)
    
      }
      const handleIncrement = () =>{
        setQuantity(prevCount => prevCount + 1)
    
    }

    const {amount} = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    const {id,name, Price,image} = item
  return (
    <div>
        <div className='flex justify-between items-center border-gray border-2 p-4 mb-6' key={id}>
            <div className='flex items-center gap-4'>
                <img src={image} alt="" className='w-24 h-24 object-cover' />
            </div>
            <div className='flex-col items-start w-30'>
                <div>{name}</div>
                <div className='flex items-center gap-4 mt-2  border-1 border-gray rounded-2xl '>
                    {/* <button type='button' className='w-10 h-8' onClick={handleDecrement}>-</button>
                      <div className='w-10 form-control text-center pt-1'>{quantity}</div>
                      <button type='button' className='w-10'  onClick={handleIncrement}>+</button> */}
                    <button type='button' className='w-10 h-8'>-</button>
                      <div className='w-10 form-control text-center pt-1'>{amount}</div>
                      <button type='button' className='w-10' onClick={()=> dispatch(increase(item))}>+</button>
                    
                </div>
            </div>
                <div className='flex flex-col items-center gap-3'>
                    <div>${(Price * amount).toFixed(2)}</div>
                    <div className='cursor-pointer'>
                        <HiMiniTrash />
                    </div>

                </div>

            

        </div>

    </div>
  )
}

export default Menu