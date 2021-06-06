import { render } from '@testing-library/react'

import Search from './presentation'

test('renders the <SearchForm /> component', () => {
  const { getByText } = render(<Search />)

  expect(getByText('Client ID:')).toBeInTheDocument()
  expect(getByText('Client Secret:')).toBeInTheDocument()
  expect(getByText('Venue:')).toBeInTheDocument()
})
