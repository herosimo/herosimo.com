import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { Flex, Heading, Text, Grid, GridItem, Image } from '@chakra-ui/react'

import arrowRight from '../assets/arrow-right.svg'

export default ({ article }) => (
  <Grid templateColumns="repeat(3, 1fr)" gap={'30px'} marginBottom={'20'}>
    <GridItem>{article.publishDate}</GridItem>
    <GridItem height={'100%'}>
      <Flex
        justifyContent={'space-between'}
        flexDirection={'column'}
        height={'100%'}
      >
        <div>
          <Heading as={'h3'} marginBottom={'4'} fontSize={'3xl'}>
            <Link to={`/blog/${article.slug}`}>{article.title}</Link>
          </Heading>
          <Text
            as={'p'}
            dangerouslySetInnerHTML={{
              __html: article.description.childMarkdownRemark.html,
            }}
          />
        </div>
        <Link to={`/blog/${article.slug}`}>
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
        </Link>
      </Flex>
    </GridItem>
    <GridItem>
      <Img alt="" fluid={article.heroImage.fluid} objectFit="cover" />
    </GridItem>
  </Grid>
)
