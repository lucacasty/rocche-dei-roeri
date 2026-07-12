import {

  Routes,
  Route

} from "react-router-dom";


import {

  Home,
  Amaro,
  Amarissimo,
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

        path="/amaro"

        element={<Amaro />}

      />



      <Route

        path="/amarissimo"

        element={<Amarissimo />}

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