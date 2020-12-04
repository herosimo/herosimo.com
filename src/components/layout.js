import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../utilities/theme'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <ChakraProvider theme={theme} resetCSS={false}>
        <Container>
          <Navigation />
          {children}
        </Container>
      </ChakraProvider>
    )
  }
}

export default Template
