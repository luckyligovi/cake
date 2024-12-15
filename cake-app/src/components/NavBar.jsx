import React, { useState } from "react";
import logo from "../image/cake_house_logo.png"
import {
  AppBar,
  Box,
  Button,
  IconButton,
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

export default function NavBar({ cartCount }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCategoryClick = (event) => {
    setCategoryAnchorEl(event.currentTarget);
  };

  const handleCategoryClose = () => {
    setCategoryAnchorEl(null);
  };

  const categories = [
    { name: "Classic Cakes", path: "/category/classic-cakes" },
    { name: "Layer Cakes", path: "/category/layer-cakes" },
    { name: "Cheesecakes", path: "/category/cheesecakes" },
    { name: "Fruit-Based Cakes", path: "/category/fruit-based-cakes" },
    { name: "Specialty Cakes", path: "/category/specialty-cakes" },
    {
      name: "Holiday & Seasonal Cakes",
      path: "/category/holiday-seasonal-cakes",
    },
    {
      name: "Mini & Individual Cakes",
      path: "/category/mini-individual-cakes",
    },
    { name: "Diet-Friendly Cakes", path: "/category/diet-friendly-cakes" },
    {
      name: "Celebration & Theme Cakes",
      path: "/category/celebration-theme-cakes",
    },
    {
      name: "Custom & Designer Cakes",
      path: "/category/custom-designer-cakes",
    },
  ];

  return (
    <AppBar position="sticky" color="white" sx={{ backgroundColor: "white" }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          margin: { xs: "0 10px", md: "0 200px" },
        }}
      >
        <Link className="nav-link" to="/">
          {/* <Typography variant="h6">Cake-house</Typography> */}
          {/* <img src={logo} alt="cake" /> */}
        </Link>

       

        {isMobile ? (
          // mobile
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
             <MenuItem   onClick={handleCategoryClick}>Categories</MenuItem>
            <Menu
              anchorEl={categoryAnchorEl}
              open={Boolean(categoryAnchorEl)}
              onClose={handleCategoryClose}
            >
              {categories.map((category) => (
                <MenuItem key={category.name} onClick={handleCategoryClose}>
                  <Link className="nav-link" to={category.path}>
                    {category.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
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
                <Link className="nav-link" to="/cart">
                  <ShoppingBasketRoundedIcon sx={{ fontSize: 24 }} />
                </Link>
              </MenuItem>
            </Menu>

            <IconButton>
              <Link className="nav-link" to="/cart">
                <Badge badgeContent={cartCount} color="secondary">
                  <ShoppingBasketRoundedIcon sx={{ fontSize: 24 }} />
                </Badge>
              </Link>
            </IconButton>
          </Box>
        ) : (
          // desktop
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
            <Button className="nav-link" color="black" onClick={handleCategoryClick}>Categories</Button>
            <Menu
              anchorEl={categoryAnchorEl}
              open={Boolean(categoryAnchorEl)}
              onClose={handleCategoryClose}
            >
              {categories.map((category) => (
                <MenuItem key={category.name} onClick={handleCategoryClose}>
                  <Link className="nav-link" to={category.path}>
                    {category.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
            <IconButton>
              <Link className="nav-link" to="/cart">
                <Badge badgeContent={cartCount} color="secondary">
                  <ShoppingBasketRoundedIcon sx={{ fontSize: 24 }} />
                </Badge>
              </Link>
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
