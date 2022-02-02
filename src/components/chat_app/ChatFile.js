import React from "react";
import { Flex, HStack, Avatar, Heading, Text } from "@chakra-ui/react";

const ChatFile = ({ img, fileName, fileResolution, fileSize }) => {
  return (
    <HStack
      justifyContent="space-even"
      p="10px 3px"
      borderBottomWidth={1}
      borderColor="gray.100"
    >
      <Avatar size="sm" name={img} borderRadius="10%" />
      <Flex flexDirection="column" w="80%">
        <Heading fontSize="xs">{fileName}</Heading>
        <Text fontSize="xx-small" mt="2px" color="gray.500">
          {fileResolution}
        </Text>
      </Flex>
      <Text w="20%" textAlign="right" fontSize="xx-small" color="gray.500">
        {fileSize}
      </Text>
    </HStack>
  );
};

export default ChatFile;
