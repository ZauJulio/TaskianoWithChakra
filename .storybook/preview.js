import { ChakraProvider } from '@chakra-ui/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ChakraProvider>
  )
]
