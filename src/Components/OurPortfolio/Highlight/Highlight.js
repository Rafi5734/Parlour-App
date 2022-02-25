import React from 'react';
import "./hightlight.css"
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Highlight = () => {
    const { category = "highlight" } = {};
    const [highLightList, setHighLightList] = useState([]);
    const [trueHighLight, setTrueHighLight] = useState(false);


    useEffect(() => {
    fetch("./items.json")
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data);
        var filteredCategory = data.filter(
          (productList) => productList.category === category
        );
        setHighLightList(filteredCategory);
        setTrueHighLight(true);
      });
  }, []);
    return (
        <Container>
      <div className="mt-5 all-hair-cards">
        {
          trueHighLight ? (
            highLightList.map((item) => (
              <Card sx={{ maxWidth: 345, mb: "30px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="340"
                    image={item.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.itemName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" variant="outlined">
                    KNOW MORE
                  </Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )

          /* {} */
        }
      </div>
    </Container>
    );
};

export default Highlight;