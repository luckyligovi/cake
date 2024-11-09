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

export default function Products({ onAddToCart }) {
  const products = [
    {
      id: 1,
      name: "Black Forest",
      price: 1200,
      image: blackForest,
      description: "ffhslkhabglvgboaqhnp cfqwodtqay lshgpeyh",
    },
    {
      id: 2,
      name: "wedding",
      price: 1300,
      image: weddingCake,
      description:
        "white decorated with icing and consisting of more than one layer",
    },
    {
      id: 3,
      name: "cup cake",
      price: 2500,
      image: cupCake,
      description: "A small sweet baked good topped with frosting",
    },
    {
      id: 3,
      name: "graduation cake",
      price: 1450,
      image: graduationCake,
      description: "ffhslkhabglvgboaqhnp cfqwodtqay lshgpeyh",
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
        backgroundColor: "FFFDF9",
        borderRadius: 10,
      }}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          sx={{
            width: 300,
            cursor: "pointer",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardMedia
            component="img"
            alt={product.name}
            height="280"
            image={product.image}
          />
          <CardContent sx={{ textAlign: "left" }}>
            <Typography gutterBottom variant="h4" component="div">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {product.description}
            </Typography>

            <Typography variant="h6" sx={{ color: "text.secondary" }}>
              Ksh {product.price}
            </Typography>
          </CardContent>
          <CardActions sx={{ color: "black", mt: "auto" }}>
            <Button
              onClick={() => onAddToCart(product)}
              sx={{
                width: "100%",
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
