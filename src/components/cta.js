import React from 'react'

import { Container, Flex, Heading, Text, Image } from '@chakra-ui/react'

import arrowRight from '../assets/arrow-right.svg'

export default ({ homepage, siteDetails }) => (
  <Container maxWidth={'1200px'} paddingY={'24'}>
    <Heading as={'h2'} fontSize="40px" marginBottom={'4'}>
      {homepage.ctaTitle.ctaTitle}
    </Heading>
    <Text as={'p'} marginBottom={'8'} fontSize={'lg'}>
      {homepage.ctaSubtitle.ctaSubtitle}
    </Text>
    <Flex>
      <Text as={'p'} fontWeight={'600'} fontSize={'2xl'} marginRight={'4'}>
        {siteDetails.email}
      </Text>
      <Image src={arrowRight} alt={''} position={'relative'} top={'5px'} />
    </Flex>
  </Container>
)
