import "./App.css";
import { Button, Box, Center } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Center margin={10} bg="tomato">
        <Box padding={4}>
          <input type="text" />
          <Button>Click me</Button>
        </Box>
      </Center>
      <h1>teste</h1>
    </div>
  );
}

export default App;
