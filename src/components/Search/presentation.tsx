import React, { FC, useEffect, useRef } from 'react'
import { Wrapper, Form, Input, Label, FormControl } from './presentation.styled'

export interface ISearchProp {
	setSearchTerm: (searchTerm: string) => void
	setClientId: (clientId: string) => void
	setClientSecret: (clientSecret: string) => void
	clientId: string
	searchTerm: string
	clientSecret: string
}

const Search: FC<ISearchProp> = ({ setSearchTerm, setClientId, setClientSecret, clientId, searchTerm, clientSecret }) => {
	const id = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if(id && id.current) {
      id.current.focus()
    }
	}, [])

 return (
		<Wrapper>
			<h1>Find your venue</h1>
		 <Form onSubmit={(e: HTMLFormElement) => e.preventDefault()} >
			 <FormControl>
				<Label htmlFor="clientId">Client ID:</Label>
				<Input
					type="text"
					placeholder="Client Id"
					ref={id}
					value={clientId}
					name="clientId"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setClientId(e.currentTarget.value)}
				/>
			 </FormControl>
			 <FormControl>
					<Label htmlFor="clientSecret">Client Secret:</Label>
					<Input
						type="text"
					 	placeholder="Client Secret"
					 	name="clientSecret"
						value={clientSecret}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setClientSecret(e.currentTarget.value)}
					/>
				</FormControl>
			 	<FormControl>
					<Label htmlFor="search">Venue:</Label>
					<Input
						type="text"
						placeholder="Venue"
						name="search"
						value={searchTerm}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
					/>
				</FormControl>
		 </Form>
		</Wrapper>
  )
}

export default Search
