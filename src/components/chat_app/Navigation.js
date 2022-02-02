import React from 'react';
import { VStack, IconButton, Tooltip } from '@chakra-ui/react';
import { MdDashboard, MdMail, MdSettings } from 'react-icons/md';
import { HiLightningBolt, HiBell, HiTag, HiSearch } from 'react-icons/hi';

const Navigation = () => {
  return (
    <VStack justifyContent="space-between" alignItems="center" w="full" p="30px 0">
      <VStack>
      <Tooltip label="Dashboard" placement="right">
        <IconButton color="gray.500" icon={<MdDashboard size={25} />} aria-label="Dashboard" />
      </Tooltip>
      <Tooltip label="Actions" placement="right">
        <IconButton color="gray.500" icon={<HiLightningBolt size={25} />} aria-label="Actions" />
      </Tooltip>
      <Tooltip label="Search" placement="right">
        <IconButton color="gray.500" icon={<HiSearch size={25} />} aria-label="Search" />
      </Tooltip>
      <Tooltip label="Notifications" placement="right">
        <IconButton color="gray.500" icon={<HiBell size={25} />} aria-label="Notifications" />
      </Tooltip>
      <Tooltip label="Tag" placement="right">
        <IconButton color="gray.500" icon={<HiTag size={25} />} aria-label="Tag" />
      </Tooltip>
      <Tooltip label="Messages" placement="right">
        <IconButton color="gray.500" icon={<MdMail size={25} />} aria-label="Messages" />
      </Tooltip>
      </VStack>
      <Tooltip label="Settings" placement="right">
        <IconButton color="gray.500" icon={<MdSettings size={25} />} aria-label="Settings" />
      </Tooltip>
    </VStack>
  )
}

export default Navigation;