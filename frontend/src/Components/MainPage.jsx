import React from "react";
import { useState } from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Login from "./Login";
import SignUp from "./Signup";

const MainPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const toggleLogin = () => {
    setIsLogin(true);
  };
  const toggleSignup = () => {
    setIsLogin(false);
  };
  return (
    <Box
      maxW="sm"
      mx="auto"
      mt={8}
      p={6}
      borderWidth={1}
      borderRadius="20px"
      boxShadow="lg"
    >
      <center>
        <Heading mb={"40px"} mt="15px">
          {isLogin ? "Login Form" : "Signup Form"}
        </Heading>
      </center>
      <Flex border="1px solid gray" borderRadius="10px" mb="30px">
        <Button
          w="50%"
          onClick={toggleLogin}
          colorScheme={isLogin ? "blue" : "default"}
          borderRightRadius="15px"
          borderLeftRadius="10px"
          variant={!isLogin ? "outline" : "solid"}
          border={"none"}
        >
          Login
        </Button>
        <Button
          w="50%"
          onClick={toggleSignup}
          colorScheme={!isLogin ? "blue" : "default"}
          borderLeftRadius="15px"
          borderRightRadius="10px"
          variant={isLogin ? "outline" : "solid"}
          border={"none"}
        >
          Signup
        </Button>
      </Flex>
      {!isLogin ? <SignUp /> : <Login />}
    </Box>
  );
};

export default MainPage;
