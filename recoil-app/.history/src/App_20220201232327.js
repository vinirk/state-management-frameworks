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
      <Center margin={10}>
        <Box padding={4} width={300} bg="gray.100">
          <FormControl isRequired>
            <FormLabel htmlFor="first-name">First name</FormLabel>
            <Input id="first-name" placeholder="First name" bg="white" />
          </FormControl>
          <Button mt={5}>Click me</Button>
        </Box>
      </Center>
    </div>
  );
}

export default App;
