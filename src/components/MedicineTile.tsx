import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@mui/material";
import { AddShoppingCart, ExpandMore } from "@mui/icons-material";

type Medicine = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  additionalInfo?: string;
  addToCart: () => void; // Example function for adding to cart
};

interface MedicineTileProps {
  medicine: Medicine;
}

const MedicineTile: React.FC<MedicineTileProps> = ({ medicine }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={medicine.image}
        alt={medicine.name}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {medicine.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {medicine.description}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Price: {medicine.price} CAD
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
        <IconButton
          aria-expanded={expanded}
          aria-label="Show more"
          onClick={handleExpandClick}
        >
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Additional Information:</Typography>
          <Typography paragraph>
            {medicine.additionalInfo || "No additional information available."}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MedicineTile;
