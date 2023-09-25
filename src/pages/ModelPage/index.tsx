// 3rd parties
import { Box } from "@mui/material";
import { FC } from 'react';
import { Outlet } from "react-router-dom";

// App
import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";

// Local
import styles from './ModelPage.module.scss'

export const ModelPage: FC = () => (
  <Box className={styles.box} minHeight={1080} >
    <Navbar />

    <Outlet />

    <Footer />
  </Box>
);
