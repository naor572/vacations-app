import React from "react";
import Card from "@mui/material/Card";
import { Grid } from "@material-ui/core";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardVacation = (prop) => {
  return (
    <Grid item xs={10} sm={6} md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={prop.picture} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {prop.destination}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {prop.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {"Start at: " + prop.travel_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {"End at: " + prop.return_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {"Price: " + prop.price + " $"}
          </Typography>
        </CardContent>
        <CardActions>{prop.children}</CardActions>
      </Card>
    </Grid>
  );
};
export default CardVacation;
