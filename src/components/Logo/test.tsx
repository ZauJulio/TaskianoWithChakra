import { render } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <div>
        <Logo />
      </div>
    )

    expect(container.querySelector('#logo_taskiano')).toBeInTheDocument()
  })
})
