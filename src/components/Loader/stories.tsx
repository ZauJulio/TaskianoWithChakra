import { Story, Meta } from '@storybook/react/types-6-0'
import Loader from '.'

export default {
  title: 'Loader',
  component: Loader,
  args: {}
} as Meta

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Primary: Story = (args) => <Loader {...args} />
