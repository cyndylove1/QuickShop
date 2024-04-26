import React from "react";
import Home from "./component/Home/Home";
// import Navbar from "./component/Navbar/Navbar";
import MarketPlace from './component/MarketPlace/MarketPlace'
import Footer from "./component/Footer/Footer";
import Subscribe from './component/Subscribe/Subscribe' 
import { Route, Routes , BrowserRouter} from 'react-router-dom';
import Merchant from "./component/Merchant/Merchant";
import Blog from './component/Blog/Blog';
import Contact from "./component/Contact.jsx/Contact";
// import Seller from "./component/Seller/Seller";


function App() {
  return (
    <div>

      
        {/* <div id="about"><About/></div> */}
<BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/Seller" element={<Seller/>}/> */}
        <Route path="/MarketPlace" element={<MarketPlace/>}/>
        <Route path="/Merchant" element={<Merchant/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        
        
      </Routes>
      
      <Subscribe/>
      <Footer/>
    </BrowserRouter>
      
      
      

    </div>
  );
}

export default App;
