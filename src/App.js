import React from "react";
import Home from "./component/Home/Home";
// import Navbar from "./component/Navbar/Navbar";
import MarketPlace from './component/MarketPlace/MarketPlace'
// import Footer from "./component/Footer/Footer";
// import Subscribe from './component/Subscribe/Subscribe' 
import { useState } from "react";
import { Route, Routes , BrowserRouter} from 'react-router-dom';
import Merchant from "./component/Merchant/Merchant";
import Blog from './component/Blog/Blog';
import Contact from "./component/Contact.jsx/Contact";
import AllProduct from "./component/AllProduct/AllProduct";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import Information from "./component/Information/Information";
import ProductView from "./component/ProductView/ProductView";
import Shipping from "./component/Shipping/Shipping";
// import Header from "./component/Header/Header";
import Data from './component/Data'
// import Seller from "./component/Seller/Seller";


function App() {
  
//   const [category ,setCategory, ] = useState(null) 

//   const [query, setQuery] = useState('')

//   const handleInput = (event) =>{
//     setQuery(event.target.value)

//   }
//   const filteredInput = Data.filter((data)=>
//   data.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
// )
//   const handleChange = (event)=>{
//     setCategory(event.target.value)

// }
// function filteredData (Data, query, selected){
//   let filteredProduct = Data


//   if(query){
//     filteredProduct = filteredInput
  
//   }
//   if(selected){
//     filteredProduct = filteredProduct.filter(({title})=>
//     title === selected
   
//   )
  
// }
// // filtering inputs

// return filteredProduct.map(({images,title, Price})=>(
//   <FashionImage 
//     key={Math.random()}
//     images = {images}
//     title={title}
//     Price={Price}
//   />

// ))
  

// }
// const result = filteredData(Data, query, category,)
  

  return (
    <div>

      
        
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>

          <Route path="/" element={<Home/>}/>
          {/* <Route path="/Seller" element={<Seller/>}/> */}
          <Route path="/MarketPlace"  element={<MarketPlace  />}/>
          <Route path="/Merchant" element={<Merchant/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/AllProduct" element={<AllProduct/>}/>
          <Route path="/AllProduct/:id" element={<ProductView/>}/>
            

          {/* </Route> */}
          <Route path="/ProductDetails" element={<ProductDetails/>}/>
          <Route path="/ProductDetails" element={<ProductDetails/>}/>
          <Route path="/ProductView" element={<ProductView/>}/>
          <Route path=":ProductViewId" element={<ProductView/>}/>
          {/* <Route path="/FashionImage/:id" element={<FashionImage/>}> */}

          {/* </Route> */}
          <Route path="/Information" element={<Information/>} />
          <Route path="/Shipping" element={<Shipping/>}/>
          {/* <Route path="/Header" element={<Header/>}/> */}
          {/* <Header/> */}
          
          
          
        </Routes>
      
      </BrowserRouter>
        
      
      

    </div>
  );
}

export default App;
