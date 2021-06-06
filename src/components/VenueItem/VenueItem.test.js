import { render } from '@testing-library/react'

import VenueItem from './presentation'

test('renders the <VenueItem /> component', async () => {
  const defaultProps = {
    name: 'venue name',
    location: {
      formattedAddress: ['line 1','line 2', 'line 3'],
      lat: 12.4,
      lng: 3.456,
    },
    categories: [
      { name: 'category' }
    ],
  }

  const { container, getByRole } = render(<VenueItem {...defaultProps}/>)
  const h3 = container.querySelector('h3')

  expect(h3).toHaveTextContent(defaultProps.name)
  expect(getByRole('button')).toHaveTextContent('Show more')
})
