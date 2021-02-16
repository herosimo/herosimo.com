import React from 'react'
import { Link } from 'gatsby'

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

export default ({ homepage, posts }) => (
  <Container
    className="panelColor"
    maxWidth={'1200px'}
    paddingY={'24'}
    data-color="#30336b"
  >
    <Heading as={'h2'} fontSize={'40px'} marginBottom={'4'}>
      {homepage.blogTitle.blogTitle}
    </Heading>
    <Text as={'p'} marginBottom={'16'} fontSize={'lg'}>
      {homepage.blogSubtitle.blogSubtitle}
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
      {homepage.blogContentMoreTitle.blogContentMoreTitle}
    </Heading>

    <Link to={'/blog'}>
      <Flex>
        <Text as={'p'} fontWeight={'600'} fontSize={'xl'} marginRight={'4'}>
          {homepage.blogContentMoreLinkTitle.blogContentMoreLinkTitle}
        </Text>
        <Image src={arrowRight} alt={''} position={'relative'} top={'5px'} />
      </Flex>
    </Link>
  </Container>
)
