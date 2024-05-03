
import React from 'axios'
// import { useContext } from 'react'
// import axios from 'axios'
import Data from '../Data'
import { useParams } from 'react-router-dom'
import { useContext} from 'react'
import Header from '../Header/Header'
import ProductDisplay from '../ProductDisplay/ProductDisplay'

import AllProduct from '../AllProduct/AllProduct'
import { ShopContext } from '../Context/ShopContext'
import BreadCrumb from '../BreadCrumb/BreadCrumb'


const ProductView = () => {
    const {Data} = useContext(ShopContext)
    const {productId} = useParams()
    const product = Data.find((e) => e.id === Number(productId));
      

    
 



    
  return (
    <div className=''>
       <BreadCrumb product={product}/>
        
            
    </div>
  )
}

export default ProductView