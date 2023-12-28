import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://gold-relieved-cormorant.cyclic.app/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      const token = data.token;
      if (response.ok) {
        toast({
          title: "Login Success",
          description: "User logged in successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        localStorage.setItem("Token", token);
      } else {
        toast({
          title: "Login Failed",
          description: data.msg || "Wrong credentials",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <Box>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        onClick={handleLogin}
        width="100%"
        borderRadius="10px"
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
