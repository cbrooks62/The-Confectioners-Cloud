import React from "react"
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../Components/Users/Login";
import Register from "../Components/Users/Register";


export const Authorized = ({setIsLoggedIn}) => {

    return(
      <Routes>
           <Route path="*" element={<Navigate to="/login" />} />
         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
         <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn}/>} />
         </Routes>
      );
    
   }