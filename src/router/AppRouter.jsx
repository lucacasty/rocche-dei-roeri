import { useEffect } from "react";

import {

  Routes,
  Route,
  useLocation

} from "react-router-dom";


import {

  Home,
  Products,
  Order,
  Privacy

} from "../pages";



export default function AppRouter() {

  const location = useLocation();

  useEffect(() => {

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  }, [location.pathname]);


  return (

    <Routes>


      <Route

        path="/"

        element={<Home />}

      />



      <Route

        path="/products"

        element={<Products />}

      />


      <Route

        path="/ordina"

        element={<Order />}

      />



      <Route

        path="/privacy"

        element={<Privacy />}

      />



      <Route

        path="*"

        element={<Home />}

      />


    </Routes>

  );


}