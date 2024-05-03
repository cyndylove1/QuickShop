import React from 'react'
import { createContext } from 'react'
import Data from '../Data'


export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {

const contextValue = { Data }
  return (

    <ShopContext.Provider value={contextValue}>
        {props.children}

    </ShopContext.Provider>
    
  )
}

export default ShopContextProvider