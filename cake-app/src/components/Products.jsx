import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import cupCake from "../image/cake-cup.jpeg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { IconButton } from "@mui/material";

export default function Products() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: "20px",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <Card sx={{ width: 300, cursor: "pointer", borderRadius: "10px" }}>
        <CardMedia
          component="img"
          alt="cup-cake"
          height="280"
          image={cupCake}
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography gutterBottom variant="h5" component="div">
            black forest
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            black forest chock
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

      <Card sx={{ width: 300, cursor: "pointer", borderRadius: "10px" }}>
        <CardMedia
          component="img"
          alt="cup-cake"
          height="280"
          image={cupCake}
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography gutterBottom variant="h5" component="div">
            black forest
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            black forest chock
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

      <Card sx={{ width: 300, cursor: "pointer", borderRadius: "10px" }}>
        <CardMedia
          component="img"
          alt="cup-cake"
          height="280"
          image={cupCake}
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography gutterBottom variant="h5" component="div">
            black forest
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            black forest chock
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

      <Card sx={{ width: 300, cursor: "pointer", borderRadius: "10px" }}>
        <CardMedia
          component="img"
          alt="cup-cake"
          height="280"
          image={cupCake}
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography gutterBottom variant="h5" component="div">
            black forest
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            black forest chock
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

      <Card sx={{ width: 300, cursor: "pointer", borderRadius: "10px" }}>
        <CardMedia
          component="img"
          alt="cup-cake"
          height="280"
          image={cupCake}
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography gutterBottom variant="h5" component="div">
            black forest
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            black forest chock
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

      <Card sx={{ width: 300, cursor: "pointer", borderRadius: "10px" }}>
        <CardMedia
          component="img"
          alt="cup-cake"
          height="280"
          image={cupCake}
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography gutterBottom variant="h5" component="div">
            black forest
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            black forest chock
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

      <Card sx={{ width: 300, cursor: "pointer", borderRadius: "10px" }}>
        <CardMedia
          component="img"
          alt="cup-cake"
          height="280"
          image={cupCake}
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography gutterBottom variant="h5" component="div">
            black forest
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            black forest chock
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

      <Card sx={{ width: 300, cursor: "pointer", borderRadius: "10px" }}>
        <CardMedia
          component="img"
          alt="cup-cake"
          height="280"
          image={cupCake}
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography gutterBottom variant="h5" component="div">
            black forest
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            black forest chock
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

      <Card sx={{ width: 300, cursor: "pointer", borderRadius: "10px" }}>
        <CardMedia
          component="img"
          alt="cup-cake"
          height="280"
          image={cupCake}
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography gutterBottom variant="h5" component="div">
            black forest
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            black forest chock
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

    </div>
  );
}
