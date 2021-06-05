import React, { FC } from 'react'
import { FaAddressBook, FaMapMarkerAlt } from 'react-icons/fa';
import { Wrapper, Card } from './presentation.styled'

export interface IVenueListProps {
  venues: [
    {
      id: number
      name: string
      location: {
        formattedAddress: []
        lat: number
        lng: number
      }
    }
  ]
}

const VenueList: FC<IVenueListProps> = ({ venues }) => {
  return (
    <Wrapper>
      {venues && venues.map(({ id, name, location }) => (
        <Card key= {id}>
          <h3>{name}</h3>
          <p><FaAddressBook color="#53e3a6" style={{ marginRight: '.3rem'}} />{location.formattedAddress}</p>
          <p><FaMapMarkerAlt color="#53e3a6" style={{ marginRight: '.3rem' }} />{location.lat}, {location.lng}</p>
        </Card>
      ))}
    </Wrapper>
  )
}

export default VenueList
