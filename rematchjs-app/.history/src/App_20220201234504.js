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
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" placeholder="Name" bg="white" />
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </Box>
      </Center>
    </div>
  );
}

export default App;
