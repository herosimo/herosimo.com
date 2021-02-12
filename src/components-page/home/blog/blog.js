import React from 'react'
import ArticlePreview from '../../../components/article-preview'

import {
  Container,
  Flex,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'

import arrowRight from '../../../assets/arrow-right.svg'

export default ({ posts }) => (
  <Container maxWidth={'1200px'} paddingY={'24'}>
    <Heading as={'h2'} fontSize={'40px'} marginBottom={'4'}>
      Recent articles
    </Heading>
    <Text as={'p'} marginBottom={'16'} fontSize={'lg'}>
      My writing might be useful for you, who knows?
    </Text>

    <UnorderedList listStyleType={'none'} marginLeft={'0'}>
      {posts.map(({ node }) => {
        return (
          <ListItem key={node.slug}>
            <ArticlePreview article={node} />
          </ListItem>
        )
      })}
    </UnorderedList>

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
