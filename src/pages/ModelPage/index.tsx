import { Box } from "@mui/material";
import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";
import styles from './ModelPage.module.scss'
import Footer from "components/Footer";


export default function ModelPage() {
   return (
       
     <Box className={styles.box} minHeight={1080} >
         <Navbar />
         
            <Outlet />
         <Footer />
      </Box>
     
   );
 }
 