import React from "react";
import {
  Flex,
  HStack,
  VStack,
  Text,
  IconButton,
  Avatar,
  AvatarBadge,
  Heading,
  Link,
  List,
  Box,
  Divider
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import { RiDribbbleLine, RiInstagramLine, RiTwitterFill } from "react-icons/ri";
import ChatFile from "./ChatFile.js";
import ChatLink from './ChatLink.js';

const files = [
  {
    img: "A",
    fileName: "PhotoDanver.jpg",
    fileResolution: "10.03.2021 at 11:43",
    fileSize: "175kb",
  },
  {
    img: "B",
    fileName: "ClassMember.jpg",
    fileResolution: "21.03.2021 at 11:43",
    fileSize: "171kb",
  },
  {
    img: "C",
    fileName: "CookingLesson.jpg",
    fileResolution: "07.04.2021 at 11:43",
    fileSize: "162kb",
  },
  {
    img: "D",
    fileName: "Food.jpg",
    fileResolution: "30.04.2021 at 11:43",
    fileSize: "225kb",
  },
  {
    img: "E",
    fileName: "Wavve.jpg",
    fileResolution: "05.05.2021 at 11:43",
    fileSize: "512kb",
  },
  {
    img: "F",
    fileName: "CleanWater.jpg",
    fileResolution: "28.05.2021 at 11:43",
    fileSize: "64kb",
  },
];

const ChatFiles = () => {
  return (
    <Flex p="20px 7px" w="full" h="full" direction="column" alignItems="center" justifyContent="center">
      <HStack
        pr={1}
        w="full"
        h="full"
        maxH={10}
        borderColor="gray.100"
        justifyContent="space-between"
        borderBottomWidth={1}
      >
        <Text pl={3} fontSize="14px" textColor="gray.500" fontWeight="semibold">
          20 March 2021
        </Text>
        <IconButton
          aria-label="Notification"
          variant="ghost"
          color="gray.500"
          icon={<FaBell size="20px" />}
          isRound="true"
          size="sm"
        />
      </HStack>
      <VStack h="full" w="full" maxH={44} mb={5} mt={4}>
        <Avatar
          size="xl"
          name="Ryan Florence"
          src="https://bit.ly/ryan-florence"
        >
          <AvatarBadge
            boxSize={5}
            borderWidth={2}
            bg="green.400"
            right={3}
            bottom={2}
          />
        </Avatar>
        <Heading size="md">Dian Harrison</Heading>
        <HStack position="relative" top="-10px">
          <IconButton
            icon={<RiDribbbleLine />}
            variant="ghost"
            isRound="true"
            color="gray.500"
            aria-label="Dribbble Account"
          />
          <IconButton
            icon={<RiInstagramLine />}
            variant="ghost"
            rounded="full"
            color="gray.500"
            aria-label="Instagram Account"
          />
          <IconButton
            icon={<RiTwitterFill />}
            variant="ghost"
            rounded="full"
            color="gray.500"
            aria-label="Twitter Account"
          />
        </HStack>
        <Box px={1} w="full">
          <Divider color="gray.100" />
        </Box>
      </VStack>
      <VStack w="full" pt={1}>
        <HStack w="full" justifyContent="space-between" p="0 5px">
          <Heading size="xs">Shared Files</Heading>
          <Link fontSize="xs" color="blue.600" fontWeight="500">see all</Link>
        </HStack>
        <List pt="8px" w="full" h="full" maxH={52} overflowY="auto" /* borderWidth={2} borderColor="blue" */>
          {files.map(({ img, fileName, fileResolution, fileSize }, index) => (
            <ChatFile
              key={index}
              img={img}
              fileName={fileName}
              fileResolution={fileResolution}
              fileSize={fileSize}
            />
          ))}
        </List>
        <HStack w="full" justifyContent="space-between" p="0 5px">
          <Heading size="xs">Shared Links</Heading>
          <Link fontSize="xs" color="blue.600" fontWeight="500">see all</Link>
        </HStack>
          <ChatLink />
      </VStack>
    </Flex>
  );
};

export default ChatFiles;
