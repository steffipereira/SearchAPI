import React, { useEffect } from 'react'
import { Wrapper, Form, Input } from './presentation.styled'

const Search = ({ setSearchTerm, setClientId, setClientSecret }) => {
	const search = React.useRef('')
	const id = React.useRef('')
	const secret = React.useRef('')

  useEffect(() => {
   search.current.focus()
	}, [])

 return (
		<Wrapper>
			<h1>Find your venue</h1>
		 	<Form onSubmit={(e) => e.preventDefault()} >
			 <Input
				 type="text"
				 placeholder="Client Id"
				 ref={id}
				 value={id.current.value}
				 onChange={() => setClientId(id.current.value)}
			 />
			 <Input
				 type="text"
				 placeholder="Client Secret"
				 ref={secret}
				 value={secret.current.value}
				 onChange={() => setClientSecret(secret.current.value)}
			 />
			 <Input
				 type="text"
				 placeholder="Venue"
				 ref={search}
				 value={search.current.value}
				 onChange={() => setSearchTerm(search.current.value)}
			 />
		 </Form>
		</Wrapper>
  )
}

export default Search
