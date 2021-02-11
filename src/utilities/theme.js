import { extendTheme } from '@chakra-ui/react'

const sizes = {
  container: {
    maxWidth: '1280px',
  },
}

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'darkBg',
        color: '#FAFAFA',
      },
    },
  },

  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Poppins, sans-serif',
    mono: 'Menlo, monospace',
  },

  colors: {
    darkBg: '#131314',
  },
})

// const theme = extendTheme({ fonts, colors, sizes })
export default theme
