import React, { FC, useState } from 'react'
import { FaAddressBook, FaMapMarkerAlt, FaStore } from 'react-icons/fa';
import { Button, Section, Header } from './presentation.styled'

export interface ILocationProps {
  formattedAddress: []
  lat: number
  lng: number
}
export interface IVenueItemProps {
  name: string
  location: ILocationProps
  categories: [{
    id: number
    name: string
  }]
}

export const VenueItem: FC<IVenueItemProps> = ({ location, name, categories }) => {
  const [showMore, setShowMore] = useState(false)
  const { formattedAddress, lat, lng } = location
  return (
    <>
      <Header>
        <h3>{name}</h3>
          <Button
            type="button"
            onClick={() => setShowMore(!showMore)}
          >
           Show {!showMore ? 'more' : 'less'}
          </Button>
        </Header>
        {showMore && (
          <Section>
            <p><FaAddressBook color="#53e3a6" style={{ marginRight: '.3rem'}} />{formattedAddress.join(',')}</p>
            <p><FaMapMarkerAlt color="#53e3a6" style={{ marginRight: '.3rem' }} />{lat}, {lng}</p>
            {categories.map(({ id, name }) => (
                <div key={id}>
                  <p><FaStore color="#53e3a6" style={{ marginRight: '.3rem' }} />{name.toUpperCase()}</p>
                </div>
              )
            )}
          </Section>
        )}
    </>
  )
}

export default VenueItem
