import React from 'react'

import styles from './banner.module.scss'

import {
  Container,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
} from '@chakra-ui/react'

import behance from '../../../assets/behance.svg'
import codepen from '../../../assets/codepen.svg'
import dribbble from '../../../assets/dribbble.svg'
import github from '../../../assets/github.svg'
import arrowDown from '../../../assets/arrow-down.svg'
import { Link } from 'gatsby'

export default ({ homepage, siteDetails }) => (
  <Container maxWidth={'1200px'}>
    <div className={styles.banner}>
      <Grid templateColumns="repeat(12, 1fr)" gap={'30px'}>
        <GridItem colSpan={2}>
          <Flex
            flexDirection={'column'}
            justifyContent={'center'}
            h="calc(100vh - 111px)"
          >
            {siteDetails.socialMedia.map((node) => {
              return (
                <Link to={node.description} target="_blank">
                  <Image src={node.file.url} alt={node.title} />
                </Link>
              )
            })}
          </Flex>
        </GridItem>
        <GridItem colSpan={8}>
          <Flex
            flexDirection={'column'}
            justifyContent={'center'}
            h="calc(100vh - 111px)"
          >
            <Heading as={'h1'} fontSize="6xl" marginBottom={'6'}>
              {homepage.bannerTitle.bannerTitle}
            </Heading>
            <Text as={'p'} marginBottom={'1'} fontSize={'xl'}>
              {homepage.bannerSubtitle.bannerSubtitle}
            </Text>
            <Text as={'p'} fontSize={'xl'}>
              Drop me a message at hi@herosimo.com
            </Text>
          </Flex>
        </GridItem>
      </Grid>

      {/* Scroll down */}
      <Text
        position={'absolute'}
        bottom={'0'}
        right={'0'}
        fontSize={'xs'}
        textTransform={'uppercase'}
        letterSpacing={'4px'}
        as={'span'}
        style={{
          writingMode: 'vertical-rl',
        }}
      >
        Scroll down
        <Image
          src={arrowDown}
          alt="Arrow Down"
          width={'auto'}
          height={'9.25rem'}
        />
      </Text>
    </div>
  </Container>
)
