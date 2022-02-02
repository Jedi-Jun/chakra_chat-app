import React from "react";
import { Flex, Input, Button, Heading, useColorMode, useColorModeValue, Switch} from "@chakra-ui/react";

const Login1 = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.500")
  return (
    <Flex h="600px" alignItems="center"  justifyContent="center" /*borderWidth="1px"*/>
      <Flex direction="column" background={formBackground} rounded={6} p={12}>
        <Heading mb={6} textAlign="center" >Log in</Heading>
        <Input type="email" placeholder="jedi@chakra-ui.com" mb={3} variant="filled" />
        <Input type="passwod" placeholder="******" mb={6} variant="filled" />
        <Button colorScheme="teal">Sign In</Button>
        <Switch mt={3} colorScheme="white" textAlign="center" size="lg" onChange={toggleColorMode}></Switch>
      </Flex>
    </Flex>
  );
};

export default Login1;
