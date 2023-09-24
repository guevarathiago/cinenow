import {
  AppBar,
  Toolbar,
} from "@mui/material";


export default function Footer() {
  return (
    <AppBar
      position="sticky"
      sx={{ mt: "-8px", height: "80px", width: "100%" }}
    >
      <Toolbar sx={{ marginY: "auto", background:"black", height: "100%", justifyContent:"center"}}>Desenvolvido por Thiago B Guevara
      </Toolbar>
    </AppBar>
  );
}
