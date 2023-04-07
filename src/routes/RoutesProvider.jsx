import React from "react";
import { Routes, Route } from "react-router-dom";
import config from "../pages/config";


const RoutesProvider = () => {
    return(
        <Routes>
            {
            config.map(({element, path, Layouth}, index) => (
               <Route element={<Layouth>{element}</Layouth>} path={path} key={index}/>
            ))
            }
        </Routes>
    )
}

export default RoutesProvider