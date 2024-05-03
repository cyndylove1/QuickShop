import React from 'react'
import { RxSlash } from "react-icons/rx";

const BreadCrumb = (props) => {
    const {product} = props
  return (
    <div>
         <div>
            
            <div className='flex'>
            <div>
                    Home <span className='inline-block'><RxSlash/></span>
                </div>
                <div>
                    shop <span className='inline-block'><RxSlash/></span>
                </div> 
                
            </div>
            

           
        </div>
        
            
    </div>
  )
}

export default BreadCrumb