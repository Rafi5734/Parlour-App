import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./all.css"

const All = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("./items.json")
            .then(res => res.json())
            .then(data => {
            setItems(data);
        })
    },[])
    return (
      <Container>
        <div className="all-cards mt-5">
          {items.map((i) => (
            <Card sx={{ maxWidth: 345, mb: "30px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
                  image={i.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {i.itemName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {i.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" variant="outlined">
                  KNOW MORE
                </Button>
              </CardActions>
            </Card>
          ))}
          {/*  */}
        </div>
      </Container>
    );
};

export default All;
