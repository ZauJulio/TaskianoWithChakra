import { Story, Meta } from '@storybook/react/types-6-0'
import ButtonProvider from '.'
import { FcGoogle } from 'react-icons/fc'

export default {
  title: 'ButtonProvider',
  component: ButtonProvider,
  args: {
    name: 'Google',
    children: <FcGoogle />,
    onClick: () => alert('clicked')
  }
} as Meta

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Primary: Story = (args: any) => <ButtonProvider {...args} />
