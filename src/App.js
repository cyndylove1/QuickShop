import React from "react";
import Home from "./component/Home/Home";
// import Navbar from "./component/Navbar/Navbar";
import MarketPlace from './component/MarketPlace/MarketPlace'
import { Route, Routes , BrowserRouter} from 'react-router-dom';
import Merchant from "./component/Merchant/Merchant";
import Blog from './component/Blog/Blog';
import Contact from "./component/Contact.jsx/Contact";
import AllProduct from "./component/AllProduct/AllProduct";
import Information from "./component/Information/Information";
import ProductView from "./component/ProductView/ProductView";
import Shipping from "./component/Shipping/Shipping";
import SignUp from "./component/SignUp/SignUp";
import Verify from "./component/Verify/Verify";
import Business from "./component/Business/Business";
import NonRegistered from "./component/NonRegistered/NonRegistered";
import Upload from "./component/Upload/Upload";
import Payment from "./component/Payment/Payment";
import Login from "./component/Login/Login";
import Forgot from "./component/Forgot/Forgot";
import CodeVerify from "./component/CodeVerify/CodeVerify";
import Password from "./component/Password/Password";
import Registered from "./component/Registered/Registered";
import Upload2 from "./component/Upload2/Upload2";
import Menu from "./component/Menu/Menu";
import Main from "./component/Main/Main";
import DashBoard from "./component/DashBoard/DashBoard";
import SideBar from "./component/SideBar/SideBar";



function App() {
  


  

  return (
    <div>

      
        
      <BrowserRouter>
        
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/MarketPlace"  element={<MarketPlace  />}/>
          <Route path="/Merchant" element={<Merchant/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/AllProduct" element={<AllProduct/>}/>
          <Route path="/ProductView" element={<ProductView/>}/>
          <Route path="product/:productId"  element={<ProductView/>}/>
          <Route path="/Information" element={<Information/>} />
          <Route path="/Shipping" element={<Shipping/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Verify" element={<Verify/>}/>
          <Route path="/Business" element={<Business/>}/>
          <Route path="/NonRegistered" element={<NonRegistered/>}/>
          <Route path="/Upload" element={<Upload/>}/>
          <Route path="/Payment" element={<Payment/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Forgot" element={<Forgot/>}/>
          <Route path="/CodeVerify" element={<CodeVerify/>}/>
          <Route path="/Password" element={<Password/>}/>
          <Route path="/Registered" element={<Registered/>}/>
          <Route path="/Upload2" element={<Upload2/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/DashBoard" element={<DashBoard/>}/>
          <Route path="/SideBar" element={<SideBar/>}/>
          <Route path="/Main" element={<Main/>}/>
          
          
          
          
          
        </Routes>
      
      </BrowserRouter>
      
     

       
        
      
      

    </div>
  );
}

export default App;
