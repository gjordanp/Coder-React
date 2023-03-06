import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating } from '@mui/material';

export default function ActionAreaCard({ product, cardProps }) {
  //const cardProps={maxWidth:345,height:200,showRating:true,showPrice:true,showDescription:true}

  return (
    <Card sx={{ maxWidth: cardProps.maxWidth, width: cardProps.maxWidth }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={cardProps.height}
          image={product.image}
          alt={product.title}
          sx={{ objectFit: "contain", width: cardProps.height, marginLeft: "auto", marginRight: "auto" }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          {cardProps.showDescription &&
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          }
          {cardProps.showPrice &&
            <Typography gutterBottom variant="h5" component="div">
              {"$" + product.price}
            </Typography>
          }
          {cardProps.showRating && <Rating name="read-only" value={product.rating.rate} readOnly />}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}