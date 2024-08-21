import "./App.css";
import Posts from "./containers/Posts";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container>
      <Typography
        variant="h1"
        sx={{
          fontSize: "3rem",
        }}
      >
        React Query Pagination
      </Typography>
      <Posts />
    </Container>
  );
}

export default App;
