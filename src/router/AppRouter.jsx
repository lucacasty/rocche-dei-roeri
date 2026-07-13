import {

  Routes,
  Route

} from "react-router-dom";


import {

  Home,
  Products,
  Order,
  Privacy

} from "../pages";



export default function AppRouter() {


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