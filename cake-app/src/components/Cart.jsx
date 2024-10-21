import React from "react";
import { Grid, Typography, Stack, Button } from "@mui/material";
import Footer from "./Footer";

export default function Cart({ cartItems }) {
  console.log(cartItems)
  return (
    <div className="main-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        <Grid container spacing={2}>
          {cartItems.map((item, index) => (
            <Grid item xs={12} sm={8} key={index}>
              <Grid container spacing={0}>
                <Grid item xs={2}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "50%", height: "auto" }}
                  />
                </Grid>
                <Grid xs={7}>
                  <Typography variant="h6">{item.name}</Typography>
                </Grid>
                <Grid xs={3}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6">{item.price}</Typography>
                    <Stack spacing={2} direction="row">
                      <Button  sx={{
                border: "1px solid grey",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  color: "black",
                },
              }} >-</Button>
                      <Typography>1</Typography>
                      <Button  sx={{
                border: "1px solid grey",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  color: "black",
                },
              }}>+</Button>
                    </Stack>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      )}
      <Footer/>
    </div>
  );
}
