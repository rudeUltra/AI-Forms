import React from "react";
import {
    Center,
    List,
    ListItem,
    ListIcon,
    Heading,
    HStack,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'

import {StarIcon } from "@chakra-ui/icons";
export default function Lists(){
    return (

        
        <Center mt="100px">
        
       
        
        <List spacing={3} color="white" mb="100px">
  <ListItem >
    <ListIcon as={StarIcon } color='green.500' />
    Multiple Choice: Allows respondents to select one option from a list of predefined choices.
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon } color='green.500' />
    Short Answer: A single-line text input that allows respondents to provide short, concise answers.
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon } color='green.500' />
    Dropdown: Presents a list of options in a dropdown menu, and respondents can choose one option.
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
    <ListIcon as={StarIcon } color='green.500' />
    Info: A section for displaying text or instructions to respondents without requesting a response.


  </ListItem>
</List>



        


        </Center>

    );

};