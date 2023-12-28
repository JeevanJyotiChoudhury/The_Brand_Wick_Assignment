import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const handleSignup = async () => {
    try {
      const response = await fetch(
        "https://gold-relieved-cormorant.cyclic.app/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            userName,
            email,
            phone,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Signup Success",
          description: "New user has been added.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      } else {
        toast({
          title: "Signup Failed",
          description: data.error || "Something went wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <Box>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>User Name</FormLabel>
        <Input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Phone</FormLabel>
        <Input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        mt={6}
        onClick={handleSignup}
        width="100%"
        borderRadius="20px"
      >
        Signup
      </Button>
    </Box>
  );
};

export default SignUp;
