import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './components/login/Login.js';
import Login1 from './components/login/Login1.js';
import Chat_app from './components/chat_app';
import Test from './components/test/Login.js';

function App() {
  return (
    <ChakraProvider>
      <Chat_app />
      {/* <Login1 />
      <Login /> */}
      {/* <Test /> */}
    </ChakraProvider>
  )
}

export default App;