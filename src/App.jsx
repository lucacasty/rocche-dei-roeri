import {

BrowserRouter

} from "react-router-dom";


import Navbar

from "./components/layout/Navbar";


import Footer

from "./components/layout/Footer";


import AppRouter

from "./router/AppRouter";


import AgeVerificationDialog

from "./components/ui/AgeVerificationDialog";



export default function App(){


  return (

    <>

    <AgeVerificationDialog />


    <Navbar />


    <AppRouter />


    <Footer />


    </>

  );


}