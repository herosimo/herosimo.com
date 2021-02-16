import React from 'react'

import {
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Divider,
} from '@chakra-ui/react'

import arrowUp from '../assets/arrow-up.svg'

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export default () => (
  <Container maxWidth={'1200px'}>
    <Divider />
    <Flex justifyContent={'space-between'} paddingY={'8'}>
      <Text as={'p'}>© 2021 Herosimo Sribiko</Text>
      <Flex>
        <Image
          src={arrowUp}
          alt={''}
          onClick={backToTop}
          style={{ cursor: 'pointer' }}
        />
      </Flex>
    </Flex>
  </Container>
)
