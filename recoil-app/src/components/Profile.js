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
  Text,
} from "@chakra-ui/react";

export default function Profile({
  onUpdateUsername,
  username,
  setUsername,
  fetching,
  message,
  error,
}) {
  const [isError, setIsError] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (!isError && username && message) {
      toast({
        title: "Username updated.",
        description: "Your username has been updated.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  }, [isError, toast, username, message, error]);

  return (
    <Center margin={10}>
      <Box padding={4} width={300} bg="gray.100">
        <FormControl isInvalid={isError}>
          <FormLabel htmlFor="name">Username</FormLabel>
          <Input
            id="name"
            placeholder="Username"
            bg="white"
            isDisabled={fetching}
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
        {!fetching && !isError && message && (
          <Text mt={4}>New username: <b>{username}</b></Text>
        )}
      </Box>
    </Center>
  );
}
