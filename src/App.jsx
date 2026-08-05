import { Box } from "@mui/material";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRouter from "./router/AppRouter";
import AgeVerificationDialog from "./components/ui/AgeVerificationDialog";

export default function App(){

  return (

    <Box className="app-root" sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>

      <AgeVerificationDialog />

      <Navbar />

      <Box component="main" sx={{flex: 1}}>
        <AppRouter />
      </Box>

      <Footer />

    </Box>

  );

}