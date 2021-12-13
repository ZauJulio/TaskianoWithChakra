/* eslint-disable @typescript-eslint/no-empty-function */
import { Center, Box, keyframes } from '@chakra-ui/react'

import Modal from 'components/Modal'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import colors from 'styles/colors'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loader = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  const spinAnimation = `${spin} 2s steps(360, jump-start) infinite`

  useEffect(() => {
    const handleStart = (url: string) => {
      setLoading(url === router.pathname)
    }
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return (
    <Modal
      isOpen={loading && router.pathname !== '/'}
      onClose={() => {}}
      onOpen={() => {}}
    >
      <Center>
        <Box
          border={`16px solid ${colors.orange}`}
          borderTop={`6px solid ${colors.highPurple}`}
          borderRadius="50%"
          width="11rem"
          height="11rem"
          animation={spinAnimation}
        />
      </Center>
    </Modal>
  )
}

export default Loader
