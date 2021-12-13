import React from 'react'
import type { NextPage } from 'next'
import { Box, Flex, Text } from '@chakra-ui/react'

import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider
} from 'firebase/auth'

import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'

import { useAuth } from 'hooks/useAuth'

import Logo from 'components/Logo'
import HeadLogin from 'components/Headers/HeadLogin'
import ButtonProvider from 'components/Pages/Login/ButtonProvider'

import colors from 'styles/colors'

const Login: NextPage = () => {
  const signIn = useAuth((ctx) => ctx.signIn)

  return (
    <Flex w="100%" h="100%" backgroundColor={colors.darker}>
      <HeadLogin />

      <Flex
        w="50%"
        backgroundColor={colors.darkForce}
        boxShadow={`0 4px 8px rgba(0, 0, 0, 0.25)`}
      >
        <Flex
          w="100%"
          h="100%"
          gap={10}
          direction="column"
          align="center"
          justify="center"
        >
          <Box w="40%">
            <Logo />
          </Box>

          <Text color={colors.white} fontSize="4rem" fontFamily={'Bebas Neue'}>
            TASKIANO
          </Text>
        </Flex>
      </Flex>

      <Flex
        gap="2rem"
        h="100%"
        w="50%"
        align="center"
        justify="center"
        direction="column"
      >
        <Flex direction="column" gap="2rem">
          <Text
            color={colors.white}
            alignSelf="flex-start"
            fontSize="2rem"
            fontFamily={'Bebas Neue'}
          >
            Entrar com...
          </Text>

          <ButtonProvider
            name="Google"
            provider={GoogleAuthProvider.PROVIDER_ID}
            onClick={signIn}
          >
            <FcGoogle />
          </ButtonProvider>

          <ButtonProvider
            name="Twitter"
            provider={TwitterAuthProvider.PROVIDER_ID}
            onClick={signIn}
          >
            <AiFillTwitterCircle color="#57A9E3" />
          </ButtonProvider>

          <ButtonProvider
            name="Facebook"
            provider={FacebookAuthProvider.PROVIDER_ID}
            onClick={signIn}
          >
            <FaFacebook color="#3D5694" />
          </ButtonProvider>

          <ButtonProvider
            name="GitHub"
            provider={GithubAuthProvider.PROVIDER_ID}
            onClick={signIn}
          >
            <AiFillGithub />
          </ButtonProvider>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Login
