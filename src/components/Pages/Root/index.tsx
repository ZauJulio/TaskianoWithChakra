import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Box, Button, Flex, Text } from '@chakra-ui/react'

import Logo from 'components/Logo'

import colors from 'styles/colors'

const Root: NextPage = () => {
  const router = useRouter()

  return (
    <Flex w="100%" h="100%" backgroundColor={colors.darkForce}>
      <Flex
        w="100%"
        h="100%"
        gap={10}
        direction="column"
        align="center"
        justify="center"
      >
        <Box w="50vh">
          <Logo />
        </Box>

        <Text color={colors.white} fontSize="4rem" fontFamily={'Bebas Neue'}>
          TASKIANO
        </Text>

        <Button
          w="7rem"
          h="4rem"
          color={colors.darkForce}
          fontSize="2.5rem"
          fontFamily={'Bebas Neue'}
          onClick={() => router.push('/login')}
        >
          Login
        </Button>
      </Flex>
    </Flex>
  )
}

export default Root
