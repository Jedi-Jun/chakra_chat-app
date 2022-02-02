import React from "react";
import { Flex, HStack, VStack, Heading, Text, IconButton } from "@chakra-ui/react";
import { RiDribbbleLine, RiPinterestFill } from "react-icons/ri";

const ChatLink = () => {
  return (
    <VStack w="full">
    <HStack
      justifyContent="space-even"
      p="10px 3px"
      borderBottomWidth={1}
      borderColor="gray.100"
      w="full"
    >
      <IconButton size="sm" icon={<RiDribbbleLine />} variant="ghost" />
      <Flex flexDirection="column" w="80%">
        <Heading fontSize="xs">Dribbble.com</Heading>
        <Text fontSize="xx-small" mt="2px" color="gray.500">
          30.07.2021
        </Text>
      </Flex>
      <Text w="20%" textAlign="right" fontSize="xx-small" color="gray.500">
        07:10am
      </Text>
    </HStack>
    <HStack
      justifyContent="space-even"
      p="10px 3px"
      borderBottomWidth={1}
      borderColor="gray.100"
      w="full"
    >
      <IconButton size="sm" icon={<RiPinterestFill />} variant="ghost" />
      <Flex flexDirection="column" w="80%">
        <Heading fontSize="xs">Pinterest.com</Heading>
        <Text fontSize="xx-small" mt="2px" color="gray.500">
          02.08.2021
        </Text>
      </Flex>
      <Text w="20%" textAlign="right" fontSize="xx-small" color="gray.500">
        11:59pm
      </Text>
    </HStack>
    </VStack>
  );
};

export default ChatLink;