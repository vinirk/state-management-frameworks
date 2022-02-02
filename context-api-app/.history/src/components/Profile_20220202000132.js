import React, { useState } from "react";
import {
  Button,
  Input,
  Box,
  Center,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

export default function Profile({ onUpdateUsername, name, fetching }) {
  const [username, setUsername] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <Center margin={10}>
      <Box padding={4} width={300} bg="gray.100">
        <FormControl isRequired>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            placeholder="Name"
            bg="white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {!isError ? (
            <FormHelperText>
              Enter the email you'd like to receive the newsletter on.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          onClick={onUpdateUsername}
        >
          Submit
        </Button>
      </Box>
    </Center>
  );
}
