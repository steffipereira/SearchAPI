import React, { FC, useState } from 'react'
import { FaAddressBook, FaMapMarkerAlt, FaWindowClose } from 'react-icons/fa';
import { Wrapper, Card, Button } from './presentation.styled'

export interface ILocationProps {
  formattedAddress: []
  lat: number
  lng: number
}
export interface IVenueListProps {
  venues: [
    {
      id: number
      name: string
      location: ILocationProps
    }
  ]
}


const VenueList: FC<IVenueListProps> = ({ venues }) => {
  return (
    <Wrapper>
      {venues && venues.map(({ id, name, location}) => (
        <Card key={id}>
          <h3>{name}</h3>
          <VenueItem {...location}/>
        </Card>
      ))}
    </Wrapper>
  )
}

export const VenueItem: FC<ILocationProps> = ({ formattedAddress, lat, lng }) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <>
      {showMore ? (
        <>
          <p><FaWindowClose color="#53e3a6" className="close" onClick={() => setShowMore(!showMore)} /></p>
          <p><FaAddressBook color="#53e3a6" style={{ marginRight: '.3rem'}} />{formattedAddress}</p>
          <p><FaMapMarkerAlt color="#53e3a6" style={{ marginRight: '.3rem' }} />{lat}, {lng}</p>
        </>
      )
        :
      <Button
        type="button"
        onClick={() => setShowMore(!showMore)}
      >
        Show More
      </Button>
      }
    </>
  )
}

export default VenueList
