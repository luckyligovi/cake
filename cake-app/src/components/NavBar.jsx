import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Badge,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function NavBar({cartCount}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="sticky" color="white" sx={{ backgroundColor: "white" }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            margin: { xs: "0 10px", md: "0 200px" },
          }}
        >
          <Link className="nav-link" to="/">
            <Typography variant="h6">JULIE'S Cake</Typography>
          </Link>

          {isMobile ? (
            // Mobile view: only show menu icon and cart
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/cart">
                    <ShoppingBasketRoundedIcon sx={{ fontSize: 24 }} />
                  </Link>
                </MenuItem>
              </Menu>

              <IconButton>
              <Badge badgeContent={cartCount} color="secondary">
                <Link className="nav-link" to="/cart">
                  <ShoppingBasketRoundedIcon sx={{ fontSize: 24 }} />
                </Link>
              </Badge>
              </IconButton>
            </Box>
          ) : (
            // Desktop view: show full navigation links
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
                  Contact Us
                </Link>
              </Button>
              <Button>
                <InputLabel>Categories</InputLabel>
              </Button>
              <IconButton>
              <Badge badgeContent={cartCount} color="secondary">
                <Link className="nav-link" to="/cart">
                  <ShoppingBasketRoundedIcon sx={{ fontSize: 24 }} />
                </Link>
              </Badge>
            </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
