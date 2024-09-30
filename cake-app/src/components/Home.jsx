import React from "react";

export default function Home() {
  return (
    <div className="home-ciontainer">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="background-image"
      >
        <div>
          <h2>BLACK FOREST CAKE HOUSE</h2>
          <h1>Baked Today for Today!</h1>
          <h6>
            <i>
              Savor Our Range Of Freshly Baked Cakes <br />
              With A Blend Of Mouth-Watering Flavors
            </i>
          </h6>
        </div>
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>Popular cake categories</h2>
        <div style={{ display: "flex", flexDirection: "row", flexWrap:"wrap",justifyContent:"center",gap:"10px"}}>
          <div>
            <img
              className="category-images"
              src="https://static01.nyt.com/images/2020/01/15/dining/ss-black-forest-cake/merlin_165684495_6689b1a0-42b5-4228-b871-37bb983d797e-superJumbo.jpg"
              alt="Black Forest Cake"
            />
            <h1 style={{ textAlign: "center" }}>black forest</h1>
          </div>
          <div>
            <img
              className="category-images"
              src="https://static01.nyt.com/images/2020/01/15/dining/ss-black-forest-cake/merlin_165684495_6689b1a0-42b5-4228-b871-37bb983d797e-superJumbo.jpg"
              alt="Black Forest Cake"
            />
            <h1 style={{ textAlign: "center" }}>graduation cake</h1>
          </div>
          <div>
            <img
              className="category-images"
              src="https://static01.nyt.com/images/2020/01/15/dining/ss-black-forest-cake/merlin_165684495_6689b1a0-42b5-4228-b871-37bb983d797e-superJumbo.jpg"
              alt="cup-cake"
            />
            <h1 style={{ textAlign: "center" }}>cup cake</h1>
          </div>
          <div>
         <img className="category-images"
            src="https://static01.nyt.com/images/2020/01/15/dining/ss-black-forest-cake/merlin_165684495_6689b1a0-42b5-4228-b871-37bb983d797e-superJumbo.jpg"
            alt="Black Forest Cake"
          />
          <h1 style={{textAlign:"center"}}>black forest</h1>
         </div>
         
        </div>
      </div>
    </div>
  );
}
