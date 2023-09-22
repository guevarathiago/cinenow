import  LiveTvIcon  from '@mui/icons-material/LiveTv';
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{ mt: "-8px", height: "80px", width: "100%" }}
    >
      <Toolbar sx={{ marginY: "auto", background:"black", height: "100%"}}>
        <Link  style={{ textDecoration: 'none', color:"white"}} to="./">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <LiveTvIcon fontSize='large' sx={{mt:-1}}/>
          </IconButton>
        </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, mt:0 }}>
          C i n e n o w
        </Typography>
        <Stack direction="row" spacing={2} sx={{mr:1}}>
          <Link style={{ fontSize:"20px", textDecoration: 'none', color:"white"}} to="./">
            <Button color="inherit">Home</Button>
          </Link>
          <Link style={{ fontSize:"20px", textDecoration: 'none', color:"white"}} to="/favorites">
            <Button color="inherit">Favorites</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
