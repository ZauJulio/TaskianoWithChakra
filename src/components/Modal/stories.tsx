/* eslint-disable @typescript-eslint/no-empty-function */
import { Story, Meta } from '@storybook/react/types-6-0'
import Modal from '.'

export default {
  title: 'Modal',
  component: Modal,
  args: {
    isOpen: true,
    children: 'Modal content',
    onClose: () => {},
    onOpen: () => {}
  }
} as Meta

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Primary: Story = (args) => (
  <Modal
    isOpen={false}
    onOpen={function (): void {
      throw new Error('Function not implemented.')
    }}
    onClose={function (): void {
      throw new Error('Function not implemented.')
    }}
    {...args}
  >
    <div>Modal content</div>
  </Modal>
)
