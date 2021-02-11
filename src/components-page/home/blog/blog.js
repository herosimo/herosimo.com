import React from 'react'

import {
  Container,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
} from '@chakra-ui/react'

import img from '../../../assets/img.jpg'
import arrowRight from '../../../assets/arrow-right.svg'

export default () => (
  <Container maxWidth={'1200px'} paddingY={'24'}>
    <Heading as={'h2'} fontSize={'40px'} marginBottom={'4'}>
      Recent articles
    </Heading>
    <Text as={'p'} marginBottom={'16'} fontSize={'xl'}>
      My writing might be useful for you, who knows?
    </Text>

    <Grid templateColumns="repeat(3, 1fr)" gap={'30px'} marginBottom={'20'}>
      <GridItem>10.01.2021</GridItem>
      <GridItem height={'100%'}>
        <Flex
          justifyContent={'space-between'}
          flexDirection={'column'}
          height={'100%'}
        >
          <div>
            <Heading as={'h3'} marginBottom={'4'} fontSize={'3xl'}>
              Life is getting tough
            </Heading>
            <Text as={'p'} fontSize={'lg'}>
              A homepage design for restaurant based in Indonesia.
            </Text>
          </div>
          <Flex>
            <Text as={'p'} fontWeight={'600'} fontSize={'xl'} marginRight={'4'}>
              Read more
            </Text>
            <Image
              src={arrowRight}
              alt={''}
              position={'relative'}
              top={'5px'}
            />
          </Flex>
        </Flex>
      </GridItem>
      <GridItem>
        <Image src={img} boxSize={'100%'} objectFit="cover" alt={''} />
      </GridItem>
    </Grid>

    <Heading as={'h4'} marginBottom={'4'} fontSize={'3xl'}>
      Hold up, there are more
    </Heading>

    <Flex>
      <Text as={'p'} fontWeight={'600'} fontSize={'xl'} marginRight={'4'}>
        View all posts
      </Text>
      <Image src={arrowRight} alt={''} position={'relative'} top={'5px'} />
    </Flex>
  </Container>
)
