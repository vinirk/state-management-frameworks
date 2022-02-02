import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (!isError && name && !fetching) {
      setIsError(false);
    }
  }, [name, fetching]);

  return (
    <Center margin={10}>
      <Box padding={4} width={300} bg="gray.100">
        <FormControl isInvalid={isError}>
          <FormLabel htmlFor="name">Username</FormLabel>
          <Input
            id="name"
            placeholder="Username"
            bg="white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {!isError ? (
            <FormHelperText>Enter your username to update it.</FormHelperText>
          ) : (
            <FormErrorMessage>Username is required.</FormErrorMessage>
          )}
        </FormControl>
        <Button
          mt={4}
          width="100%"
          isLoading={fetching}
          colorScheme="teal"
          type="submit"
          onClick={() => {
            if (!username) {
              setIsError(true);
            } else {
              onUpdateUsername(username);
              setIsError(false);
            }
          }}
        >
          Submit
        </Button>
        {name}
      </Box>
    </Center>
  );
}
