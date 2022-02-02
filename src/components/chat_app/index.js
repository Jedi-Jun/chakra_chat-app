import React from "react";
import { HStack, VStack, Flex, Text, IconButton } from "@chakra-ui/react";
import Navigation from "./Navigation.js";
import ChatHistorySidebar from "./ChatHistorySidebar.js";
import Chat from "./Chat.js";
import ChatFiles from './ChatFiles.js';

function IndexPage() {
  return (
      <HStack
        w="100vw"
        h="100vh"
        spacing={0}
        borderWidth={0.5}
        borderColor="gray.200"
        borderRadius="10px"
      >
        {/* Nav */}
        <Flex as="nav" h="full" maxW={12} w="full" bg="gray.100" borderRadius="10px 0 0 10px">
          <Navigation />
        </Flex>
        {/* Aside-L */}
        <Flex bg="green.50" as="aside" h="full" maxW={{ base: 'xs', xl: 'sm' }} display={{ base: 'none', lg: 'flex' }} w="full">
          <ChatHistorySidebar />
        </Flex>
        {/* Main */}
        <Flex bg="blue.50" as="main" h="full" flex={1} >
          <Chat />
        </Flex>
        {/* Aside-R */}
        <Flex bg="pink.50" as="aside" h="full" maxW={{ base: 'xs', xl: 'sm' }} display={{ base: 'none', lg: 'flex' }} w="full" borderRadius="0 10px 10px 0">
          <ChatFiles />
        </Flex>
      </HStack>
  );
}

export default IndexPage;
