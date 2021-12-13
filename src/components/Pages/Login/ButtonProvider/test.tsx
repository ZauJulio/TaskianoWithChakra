import { render, screen } from '@testing-library/react'
import { FcGoogle } from 'react-icons/fc'

import ButtonProvider from '.'

describe('<ButtonProvider />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <ButtonProvider
        name="Google"
        provider="google"
        onClick={() => alert('clicked')}
      >
        <FcGoogle />
      </ButtonProvider>
    )

    expect(screen.getByRole('heading', { name: /Google/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
