import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './screens/LandingPage/LandingPage';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import LoginScreen from "./screens/LoginScreen/LoginScreen";

import Home from './components/Home';
import Tea from './components/Tea';
import Apparel from './components/Apparel';
import Spices from './components/Spices';
import Coconut from './components/Coconut';
import Rubber from './components/Rubber';
import Gem from './components/Gem';
import Cart from './components/Cart';

import 'react-toastify/dist/ReactToastify.css';

 const App = () =>{


 return (
   <Router>
     <div>
       
       <main>
         <Routes>
           <Route path="/" element={<LandingPage />} exact />
           <Route path="/register" element={<RegisterScreen />} exact />
           <Route path="/login" element={<LoginScreen />} exact />
           
           <Route path="/customer-home" element={<Home/>} />
            <Route path="/tea" element={<Tea/>} />
            <Route path="/apparel" element={<Apparel/>} />
            <Route path="/spices" element={<Spices/>} />
            <Route path="/coconut" element={<Coconut/>} />
            <Route path="/rubber" element={<Rubber/>} />
            <Route path="/gem" element={<Gem/>} />
            <Route path="/cart" element={<Cart/>} />

         </Routes>
       </main>
       
     </div>
   </Router>
 );
 }; 

export default App;
