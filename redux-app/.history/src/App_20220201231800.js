import "./App.css";
import { Button, Box } from "@chakra-ui/react"

function App() {
  return (
    <div className="App">
      <Box padding={4}>
        <Box height="40px" bg="tomato" />
        <Box height="40px" bg="green.300" />
      </Box>
      <input type="text" />
      <Button>Click me</Button>
      <h1>teste</h1>
    </div>
  );
}

export default App;
