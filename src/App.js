import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Search, VenueList } from './components'

const URL = 'https://api.foursquare.com/v2/venues/search?'
const CLIENT_ID = 'J450J0JCLAP3WX3A3TDDNVKX4GADORLP5HGTUKICRDDDCK5N'
const CLIENT_SECRET = 'JF423FZLNIZFUELD3SDE5OVMNT4ORPPGABGIW4FLIEHW3GGI'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [clientId, setClientId] = useState(CLIENT_ID)
  const [clientSecret, setClientSecret] = useState(CLIENT_SECRET)
  const [venues, setVenues] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        client_id: clientId,
        client_secret: clientSecret,
        v:20200226,
        near: 'london',
        query: searchTerm,
      }
      if (searchTerm) {
        await axios.get(URL + new URLSearchParams(params))
          .then(response => setVenues(response.data.response.venues))
          .catch(error => {
            console.log(error)
          })
      } else {
        setVenues([])
      }
    }
    fetchData()
  }, [searchTerm])
    console.log(venues)
  return (
    <>
      <Search
        setSearchTerm={setSearchTerm}
        setClientId={setClientId}
        setClientSecret={setClientSecret}
      />
      <VenueList venues={venues} />
    </>
  );
}

export default App;
