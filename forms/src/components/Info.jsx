import React from "react";
import {Box,Heading,Center,Flex,Card,CardBody,Image,Stack,Text} from '@chakra-ui/react';


export default function Info(){
    return(
        <Flex  justify="space-around" wrap="wrap">
            <Card maxW='sm' bg="green.500">
  <CardBody  color="black">
    <Image
      src='https://uploads-ssl.webflow.com/647df82cf99096a6ae75676b/648693d8696491815923fc55_6117a822548e677b065f2a84_6072c33217590b827dbb6e3b_google-forms.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    
      <Center mt="50px">
      <Heading size='md'> Allow users to create forms</Heading>

      </Center>
      
     
      
    
  </CardBody>
  
  
</Card>

<Card maxW='sm' bg="green.500">
         <CardBody  color="black">
    <Image
      src='https://form-publisher.com/blog/content/images/2022/10/Create-a-Google-Forms-QR-Code-for-Easy-Participation.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
     <Center mt="50px">
      <Heading size='md'> Share forms via unique links.</Heading>

      </Center>
  </CardBody>
  
  
</Card>
<Card maxW='sm' bg="green.500">
<CardBody  color="black">
    <Image
      src='https://surveysparrow.com/wp-content/uploads/2020/09/google-forms-1.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
     <Center mt="50px">
      <Heading size='md'> Allow users to complete forms</Heading>

      </Center>
  </CardBody>
  
  
</Card>
<Card maxW='sm' bg="green.500">
<CardBody  color="black">
    <Image
      src='https://lh3.googleusercontent.com/fAQAzXOc_vdu9y9UjXqvGqWbaL0bdJq1CCxljUModhJUA0trlXlHs8gMiOZwcDM_g94h1w9rjIz6YKJqTqpQKmWydv5nNohvkd-x_EkkPbJCzbgtDSQ=s0'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
     <Center mt="50px">
      <Heading size='md'>Allow form owners to visualize responses. </Heading>

      </Center>
  </CardBody>
  
  
</Card>




           
        </Flex>
    );
};