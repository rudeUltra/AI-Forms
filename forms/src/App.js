import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Body from './components/Body';
import Info from './components/Info';
import React from "react";
import Lists from './components/Lists';
import {Box} from '@chakra-ui/react';


function App() {

  const gradientStyle = {
    background: "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
    minHeight: "100vh",
  };

  return (
    <Box sx={gradientStyle}>
    <Nav></Nav>
    <Body></Body>
    <Info></Info>
    <Lists></Lists>

        
    </Box>
  

    
  );
}

export default App;
