import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'

import { ToastContainer } from 'react-toastify'

import {
  AuthContextProvider,
  ProjectsContextProvider,
  TasksContextProvider,
  HistoryContextProvider
} from 'contexts'

import Loader from 'components/Loader'
import HeadMain from 'components/Headers/HeadMain'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import 'react-toastify/dist/ReactToastify.css'

import 'lib/services/Firebase'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ChakraProvider theme={theme}>
      <HeadMain />
      <GlobalStyles />

      <Loader />

      <ToastContainer
        theme="dark"
        className={'--toastify-color-dark:#1e202a !important'}
        style={{ position: 'fixed', zIndex: 999999 }}
        position="bottom-right"
      />

      <AuthContextProvider router={router}>
        <HistoryContextProvider>
          <ProjectsContextProvider>
            <TasksContextProvider>
              <Component {...pageProps} />
            </TasksContextProvider>
          </ProjectsContextProvider>
        </HistoryContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  )
}

export default App
