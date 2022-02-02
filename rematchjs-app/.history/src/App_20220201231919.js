import "./App.css";
import { Button, Box, Center } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Center padding={10} bg="tomato" h="100px" color="white">
        This is the Center
      </Center>
      <Box padding={4}>
        <input type="text" />
        <Button>Click me</Button>
      </Box>
      <h1>teste</h1>
    </div>
  );
}

export default App;
