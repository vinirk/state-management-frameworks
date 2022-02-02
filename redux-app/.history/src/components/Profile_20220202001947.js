import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  Box,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";

export default function Profile({ onUpdateUsername, name, fetching, message }) {
  const [username, setUsername] = useState("");
  const [isError, setIsError] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (!isError && name && message) {
      toast({
        title: "Username updated.",
        description: "Your username was updated.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else if (!name && !message) {
      toast({
        title: "Username is Invalid.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
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
          {isError && (
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
      </Box>
    </Center>
  );
}
