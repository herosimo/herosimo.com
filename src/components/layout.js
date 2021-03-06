import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import Navigation from './navigation'
import Footer from './footer'

import base from '../utilities/base.scss'
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
      <ChakraProvider theme={theme} resetCSS={true}>
        <Navigation />
        {children}
        <Footer />
      </ChakraProvider>
    )
  }
}

export default Template
