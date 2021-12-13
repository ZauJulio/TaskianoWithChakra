import {
  Modal as ModalChakra,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  Button
} from '@chakra-ui/react'

interface ModalProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  children: React.ReactNode
  hideCloseButton?: boolean
}

const Modal = (props: ModalProps) => {
  return (
    <ModalChakra isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalCloseButton />
      <ModalContent
        justifyContent="center"
        h="80%"
        w="100%"
        backgroundColor="transparent"
        boxShadow={0}
      >
        {props.children}
      </ModalContent>

      {!props.hideCloseButton && (
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={props.onClose}>
            Close
          </Button>
        </ModalFooter>
      )}
    </ModalChakra>
  )
}

export default Modal
