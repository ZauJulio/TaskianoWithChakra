import { Button, Flex } from '@chakra-ui/react'
import colors from 'styles/colors'

interface ButtonProviderProps {
  name: string
  provider: string
  onClick: (provider: string) => void
  children: React.ReactNode
}

const ButtonProvider = (props: ButtonProviderProps) => (
  <Button
    colorScheme="teal"
    w="18rem"
    h="4rem"
    backgroundColor={colors.dark}
    boxShadow={`0 4px 4px rgba(0, 0, 0, 0.25)`}
    _hover={{ background: colors.darker }}
    onClick={() => props.onClick(props.provider)}
  >
    <Flex
      gap="1rem"
      w="100%"
      fontWeight={500}
      fontSize="2rem"
      justify="space-around"
      fontFamily={'Bebas Neue'}
    >
      {props.children}
      {props.name}
    </Flex>
  </Button>
)

export default ButtonProvider
