import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import cupCake from "../image/cake-cup.jpeg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import blackForest from "../image/black-forest.jpeg";
import weddingCake from "../image/wedding-cake.jpeg";
import graduationCake from "../image/graduation.jpeg";
// import { IconButton } from "@mui/material";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Black Forest",
      price: "KSHs 1,200",
      image: cupCake,
    },
    {
      id: 2,
      name: "wedding",
      price: "KSHs 1,300",
      image: weddingCake,
    },
    {
      id: 3,
      name: "cup cake",
      price: "KSHs 1,400",
      image: blackForest,
    },
    {
      id: 3,
      name: "graduation cake",
      price: "KSHs 1,400",
      image: graduationCake,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: "20px",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <Card key={product.id} sx={{ width: 300, cursor: "pointer", borderRadius: "10px" }}>
          <CardMedia component="img" alt={product.name} height="280" image={product.image} />
          <CardContent sx={{ textAlign: "left" }}>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="h6" sx={{ color: "text.secondary" }}>
              {product.price}
            </Typography>
          </CardContent>
          <CardActions sx={{ color: "black" }}>
            <Button
              
              sx={{
                border: "1px solid grey",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  color: "black",
                },
              }}
            >
              <ShoppingCartOutlinedIcon sx={{ color: "black" }} />
              <Typography variant="body3" sx={{ color: "black" }}>
                ADD TO CART
              </Typography>
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
