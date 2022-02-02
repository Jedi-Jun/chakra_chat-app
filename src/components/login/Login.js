import React from "react";
import {
  Flex,
  Center,
  FormControl,
  FormLabel,
  Button,
  Input,
  Heading,
  Box,
  Divider,
  Link,
} from "@chakra-ui/react";

function Login() {
  return (
      // borderWidth="1px"
      // rounded={10}
      // m={100}
      // // w="660px"
      // h="600px"
      // p={6}
      // backgroundColor="blue.100"
      <Flex h="600px" alignItems="center" justifyContent="center">
        <Flex color="gray.50" direction="column" backgroundColor="blue.100" p={8} rounded={9}>
          <Heading
            color="blackAlpha.900"
            size="lg"
            mb={12}
            mt={4}
            textAlign={"center"}
          >
            Welcome to Jedi-World
          </Heading>
          <FormControl>
            <Divider w="104%" transform="translateX(-2%)" mb={5} />
            <FormLabel color="blackAlpha.800" htmlFor="email" ml={0.5}>
              Email
            </FormLabel>
            <Input
              type="email"
              id="email"
              w="400px"
              size="md"
              mb={4}
              placeholder="Enter email"
              color="black"
              fontSize="1.1em"
              variant="filled"
              border="2px"
              borderColor="gray.400"
            />
            <FormLabel color="blackAlpha.800" htmlFor="pwd" ml={0.5}>
              Password
            </FormLabel>
            <Input
              type="password"
              id="pwd"
              w="400px"
              mb={8}
              placeholder="Enter password"
              color="black"
              variant="filled"
              border="2px"
              borderColor="gray.400"
            />
          </FormControl>
          <Button colorScheme="twitter" w="400px">
            Log In
          </Button>
          <Link color="blue.700" fontWeight={600} textAlign={"center"} mt={4}>
            Forgot your password?
          </Link>
        </Flex>
      </Flex>
  );
}

export default Login;
