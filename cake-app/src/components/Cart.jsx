import React, { useState } from "react";
import { Grid, Typography, Stack, Button, Box } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "./Footer";

export default function Cart({ cartItems, onRemoveFromCart }) {
  // Handle remove item functionality
  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    onRemoveFromCart(updatedCart);
  };

  // State to manage quantities of items
  const [quantities, setQuantities] = useState(
    cartItems.map(() => 1) // Initialize all quantities to 1
  );

  // Function to handle quantity increase
  const handleAdd = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index ? quantity + 1 : quantity
      )
    );
  };

  // Function to handle quantity decrease
  const handleSubtract = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index && quantity > 1 ? quantity - 1 : quantity
      )
    );
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item, index) => {
    return total + item.price * quantities[index];
  }, 0);

  const generateWhatsAppMessage = () => {
    const message = cartItems
      .map((item, index) => {
        const itemTotal = item.price * quantities[index];
        return `${quantities[index]} x ${item.name} at Ksh ${item.price} each = Ksh ${itemTotal}`;
      })
      .join("\n");

    const finalMessage = `${message}\n\nTotal: Ksh ${totalPrice}`;
    return encodeURIComponent(`Hello, I'd like to order:\n\n${finalMessage}`);
  };

  return (
    <div className="main-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            {cartItems.map((item, index) => (
              <Grid
                container
                spacing={1}
                key={index}
                sx={{ borderBottom: "black 2px solid" }}
              >
                <Grid item xs={2}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100px", height: "100px" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={7}
                  sx={{ textAlign: "center", paddingLeft: "20px" }}
                >
                  <Typography variant="h6">{item.name}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6">Ksh {item.price}</Typography>
                    <Stack spacing={2} direction="row">
                      <Button
                        onClick={() => handleSubtract(index)} // Subtract functionality
                        sx={{
                          border: "1px solid grey",
                          "&:hover": {
                            backgroundColor: "#f0f0f0",
                            color: "black",
                          },
                        }}
                      >
                        -
                      </Button>
                      <Typography>{quantities[index]}</Typography>

                      <Button
                        onClick={() => handleAdd(index)} // Add functionality
                        sx={{
                          border: "1px solid grey",
                          "&:hover": {
                            backgroundColor: "#f0f0f0",
                            color: "black",
                          },
                        }}
                      >
                        +
                      </Button>
                    </Stack>
                    <Button
                      onClick={() => handleRemoveItem(index)}
                      variant="outlined"
                      color="secondary"
                      sx={{ mt: 1 }}
                    >
                      Remove
                    </Button>
                  </div>
                </Grid>
              </Grid>
            ))}
          </Grid>

          {/* Order Summary Section */}
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ backgroundColor: "#f3f0f0", height: "200px" }}
          >
            <Typography variant="h4">Order Summary</Typography>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">Ksh {totalPrice || 0}</Typography>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center", // Centers the button horizontally
                padding: "20px 0",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#181C14",
                  "&:hover": { backgroundColor: "#3C3D37" },
                  height: "40px",
                  width: "100%",
                }}
              >
                <a
                   href={`https://wa.me/+254798645012?text=${generateWhatsAppMessage()}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                    <FaWhatsapp size={25} className="icon whatsapp" />
                    <Typography>Order By WhatsApp</Typography>
                  </div>
                </a>
              </Button>
            </div>
          </Grid>
        </Grid>
      )}
      <Footer />
    </div>
  );
}
