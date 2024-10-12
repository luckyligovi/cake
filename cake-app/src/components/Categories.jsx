import React from "react";

export default function Categories(props) {
  return (
    <div>
      <img className="category-images" src={props.image} alt={props.alt} style={{ cursor: "pointer" }} />
      <h3>{props.title}</h3>
    </div>

  );
}
