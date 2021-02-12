import React from 'react'

import { Container, Flex, Heading, Text, Image } from '@chakra-ui/react'

import arrowRight from '../../../assets/arrow-right.svg'

export default () => (
  <Container maxWidth={'1200px'} paddingY={'24'}>
    <Heading as={'h2'} fontSize="40px" marginBottom={'4'}>
      Say hi
    </Heading>
    <Text as={'p'} marginBottom={'8'} fontSize={'lg'}>
      Let's make something great together
    </Text>
    <Flex>
      <Text as={'p'} fontWeight={'600'} fontSize={'2xl'} marginRight={'4'}>
        hi@herosimo.com
      </Text>
      <Image src={arrowRight} alt={''} position={'relative'} top={'5px'} />
    </Flex>
  </Container>
)
