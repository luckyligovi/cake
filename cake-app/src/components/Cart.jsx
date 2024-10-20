import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import Footer from "./Footer";
import cupCake from "../image/cake-cup.jpeg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Cart() {
  return (
    <div className="home-ciontainer">
      <h2>Shoppin Cart</h2>
      <Grid container spacing={2}>
        {/* This is an item */}
        <Grid item xs={12} sm={8}>
          <Grid container spacing={0}>
            <Grid item xs={2}>
              <img
                src={cupCake}
                alt="cupcake"
                style={{ width: "70%", height: "auto" }}
              />
            </Grid>
            <Grid xs={7}>
              <p>Lorem ipsum dolor sit amet.</p>
            </Grid>
            <Grid xs={3}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>Ksh 720</h3>

                <div>
                  <Stack spacing={2} direction="row">
                    <Button variant="contained">-</Button>
                    <Typography>2</Typography>
                    <Button variant="outlined">+</Button>
                  </Stack>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* This is another item */}
        <Grid item xs={12} sm={4}>
          <div style={{ backgroundColor: "lightgreen", height: "100px" }}>
            Item 2
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
