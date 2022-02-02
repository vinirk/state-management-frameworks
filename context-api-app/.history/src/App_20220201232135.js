import "./App.css";
import {
  Button,
  Input,
  Box,
  Center,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Center margin={10} bg="tomato">
        <Box padding={4}>
          <FormControl isInvalid={false}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input bg="white" placeholder="Value" />
          </FormControl>

          <Button>Click me</Button>
        </Box>
      </Center>
      <h1>teste</h1>
    </div>
  );
}

export default App;
