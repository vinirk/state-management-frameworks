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
        <Box padding={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="first-name">First name</FormLabel>
            <Input id="first-name" placeholder="First name" />
          </FormControl>
          <Input bg="white" placeholder="Value" />
          <Button mt={5}>Click me</Button>
        </Box>
      </Center>
    </div>
  );
}

export default App;