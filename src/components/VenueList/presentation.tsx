import React, { FC } from 'react'
import { Wrapper, Card } from './presentation.styled'
import VenueItem from '../VenueItem'
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
      categories: [{
        id: number
        name: string
      }]
    }
  ]
}

const VenueList: FC<IVenueListProps> = ({ venues }) => {
  return (
    <Wrapper>
      {venues.length ?
        venues.map(({ id, ...props }) => (
        <Card key={id}>
          <VenueItem {...props}/>
        </Card>
        )) :
        <h3 className="error-msg">Oops! not found, try another venue</h3>
      }
    </Wrapper>
  )
}

export default VenueList
