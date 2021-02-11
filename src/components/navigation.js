import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import { Container, Flex } from '@chakra-ui/react'
import logo from '../assets/logo.svg'
import hamburger from '../assets/hamburger.svg'

export default () => (
  <Container maxWidth={'1200px'}>
    <nav role="navigation">
      <Flex justifyContent={'space-between'} py={8}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <img src={hamburger} alt="Hamburger" />
      </Flex>
    </nav>
  </Container>
)
