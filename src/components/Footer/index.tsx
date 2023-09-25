// 3rd parties
import { AppBar, Toolbar } from "@mui/material";
import { FC } from 'react';

export const Footer: FC = () => (
  <AppBar
    position="sticky"
    sx={{ mt: "-8px", height: "80px", width: "100%" }}
  >
    <Toolbar
      sx={{
        marginY: "auto",
        background:"black",
        height: "100%",
        justifyContent:"center"
      }}
    >
      Developed by Thiago B Guevara
    </Toolbar>
  </AppBar>
);
