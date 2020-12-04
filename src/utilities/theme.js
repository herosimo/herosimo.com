// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const fonts = {
  body: 'Jost, sans-serif',
  heading: 'Georgia, serif',
  mono: 'Menlo, monospace',
}

const theme = extendTheme({ fonts })
export default theme
