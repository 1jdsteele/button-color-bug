import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./App.css";
// import characters from './protagonists.json'

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";

import Grid from "@mui/material/Grid";

import DataCard from "./DataCard";
import pkmnData from "./pkmnData.json";

const imageURLs = [
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/135.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
];

let counter = 0;

function App() {
  return (
    <>
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        >
          CSS Mystery
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          Why isn't the CSS working?
        </Typography>
      </Container>

      <Container maxWidth="lg">
        <Button
          onClick={() => {
            alert("You clicked me!");
          }}
          sx={{ backgroundColor: "red" }}
          variant="contained"
          // I'm trying to use custom CSS defined in the file App.css,
          // but it isn't working. Why, and how can I fix it?
          //answer: to overwrite material ui styling need the sx=... found above
          className="characterButton"
        >
          Red Button?
        </Button>
        <Container>
          <Grid container spacing={2}>
            {/* {imageURLs.map((url) => (
              <Grid>
                <DataCard imageURL={url} />
              </Grid>
            ))} */}
            {pkmnData.map((raw) => (
              <Grid>
                <DataCard
                  onClick={() => {
                    alert("You clicked me!");
                  }}
                  imageURL={raw.sprites.other["official-artwork"].front_default}
                />
              </Grid>
            ))}
            {/* 
            original .map:
            {imageURLs.map((url, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <DataCard imageURL={url} />
              </Grid>
            ))}
            */}
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default App;
