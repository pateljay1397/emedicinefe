import React from "react";
import Header from "./Header";
import MedicineTile from "./MedicineTile";
import { Box, Grid } from "@mui/material";

const Home = () => {
  const medicineData = [
    {
      id: 1,
      name: "Medicine A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 20.99,
      image:
        "https://images.ctfassets.net/soi6xg8oq83u/29adKlJjaiaYAzAF6aj8RH/639da1aa13240db250f7255735bbdf6b/PeptoBismol_ORIGINAL_NO_LIQUICAPS_module.png",
      addToCart: () => {
        // Implement the logic to add Medicine A to the cart
        console.log("Added Medicine A to the cart");
      },
    },
    {
      id: 1,
      name: "Medicine A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 20.99,
      image:
        "https://images.ctfassets.net/soi6xg8oq83u/29adKlJjaiaYAzAF6aj8RH/639da1aa13240db250f7255735bbdf6b/PeptoBismol_ORIGINAL_NO_LIQUICAPS_module.png",
      addToCart: () => {
        // Implement the logic to add Medicine A to the cart
        console.log("Added Medicine A to the cart");
      },
    },
    {
      id: 1,
      name: "Medicine A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 20.99,
      image:
        "https://images.ctfassets.net/soi6xg8oq83u/29adKlJjaiaYAzAF6aj8RH/639da1aa13240db250f7255735bbdf6b/PeptoBismol_ORIGINAL_NO_LIQUICAPS_module.png",
      addToCart: () => {
        // Implement the logic to add Medicine A to the cart
        console.log("Added Medicine A to the cart");
      },
    },
    {
      id: 1,
      name: "Medicine A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 20.99,
      image:
        "https://images.ctfassets.net/soi6xg8oq83u/29adKlJjaiaYAzAF6aj8RH/639da1aa13240db250f7255735bbdf6b/PeptoBismol_ORIGINAL_NO_LIQUICAPS_module.png",
      addToCart: () => {
        // Implement the logic to add Medicine A to the cart
        console.log("Added Medicine A to the cart");
      },
    },
    {
      id: 1,
      name: "Medicine A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 20.99,
      image:
        "https://images.ctfassets.net/soi6xg8oq83u/29adKlJjaiaYAzAF6aj8RH/639da1aa13240db250f7255735bbdf6b/PeptoBismol_ORIGINAL_NO_LIQUICAPS_module.png",
      addToCart: () => {
        // Implement the logic to add Medicine A to the cart
        console.log("Added Medicine A to the cart");
      },
    },
    {
      id: 1,
      name: "Medicine A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 20.99,
      image:
        "https://images.ctfassets.net/soi6xg8oq83u/29adKlJjaiaYAzAF6aj8RH/639da1aa13240db250f7255735bbdf6b/PeptoBismol_ORIGINAL_NO_LIQUICAPS_module.png",
      addToCart: () => {
        // Implement the logic to add Medicine A to the cart
        console.log("Added Medicine A to the cart");
      },
    },
    {
      id: 1,
      name: "Medicine A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 20.99,
      image:
        "https://images.ctfassets.net/soi6xg8oq83u/29adKlJjaiaYAzAF6aj8RH/639da1aa13240db250f7255735bbdf6b/PeptoBismol_ORIGINAL_NO_LIQUICAPS_module.png",
      addToCart: () => {
        // Implement the logic to add Medicine A to the cart
        console.log("Added Medicine A to the cart");
      },
    },
    {
      id: 1,
      name: "Medicine A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 20.99,
      image:
        "https://images.ctfassets.net/soi6xg8oq83u/29adKlJjaiaYAzAF6aj8RH/639da1aa13240db250f7255735bbdf6b/PeptoBismol_ORIGINAL_NO_LIQUICAPS_module.png",
      addToCart: () => {
        // Implement the logic to add Medicine A to the cart
        console.log("Added Medicine A to the cart");
      },
    },
  ];
  return (
    <div>
      <Header />
      <Box m={2}>
        <Grid container spacing={2}>
          {medicineData.map((medicine) => (
            <Grid item key={medicine.id} xs={12} md={3}>
              <MedicineTile medicine={medicine} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
