// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

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

import DataCard from './DataCard'

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
          sx={{ backgroundColor: "red" }}
          variant="contained"
          // I'm trying to use custom CSS defined in the file App.css,
          // but it isn't working. Why, and how can I fix it?
          className="characterButton"
        >
          Red Button?
        </Button>

        <Container>
          <Grid container spacing={2}>
            <Grid size={4}>
              <DataCard imageURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/135.png"></DataCard>
            </Grid>
            <Grid size={4}>
              <DataCard imageURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"></DataCard>
            </Grid>
            <Grid size={4}>
              <DataCard imageURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png"></DataCard>
            </Grid>
            <Grid size={8}>
              <DataCard imageURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png"></DataCard>
            </Grid>
          </Grid>
        </Container>

        {/*  */}
        <DataCard imageURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/135.png"></DataCard>
      </Container>
    </>
  );
}

export default App;
