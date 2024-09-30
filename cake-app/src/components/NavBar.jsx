import React from "react";
import {
  AppBar,
  Box,
  Button,
  InputLabel,

  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    // <nav>
    //   <div className="logo">
    //     <Link to="/">
    //       <h4>Juliecake</h4>
    //     </Link>
    //   </div>
    //   <div className="links">
    //     <Link to="/" className="nav-link">
    //       Home
    //     </Link>
    //     <Link to="/about" className="nav-link">
    //       About
    //     </Link>
    //     <Link to="/contact" className="nav-link">
    //       Contact
    //     </Link>
    //   </div>
    // </nav>
    <>
      <AppBar position="sticky" color="white" width="100%">
        <Toolbar
          sx={{ justifyContent: "space-between", margin: "0 200px 0 200px" }}
        >
          <Link className="nav-link" to="/">
            <Typography>JULIE'S Cake</Typography>
          </Link>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </Button>
            <Button>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </Button>
            <Button>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </Button>
            <Button>
              <InputLabel>Categories</InputLabel>
            </Button>
            <Button>
              <ShoppingBasketRoundedIcon sx={{ fontSize: 24 }} />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
