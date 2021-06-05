import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import { Search, VenueList, Loader } from './components'

const URL = 'https://api.foursquare.com/v2/venues/search?'
const CLIENT_ID = 'J450J0JCLAP3WX3A3TDDNVKX4GADORLP5HGTUKICRDDDCK5N'
const CLIENT_SECRET = 'JF423FZLNIZFUELD3SDE5OVMNT4ORPPGABGIW4FLIEHW3GGI'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [clientId, setClientId] = useState(CLIENT_ID)
  const [clientSecret, setClientSecret] = useState(CLIENT_SECRET)
  const [venues, setVenues] = useState([])
  const [status, setStatus] = useState('idle')
  const cache = useRef({})
  const [apiCall, setApiCall] = useState(0)

  useEffect(() => {
    if (!searchTerm) return

    const fetchData = async () => {
      setStatus('fetching')
      if (!cache.current[searchTerm]) {
        const params = {
          client_id: clientId,
          client_secret: clientSecret,
          v:20200226,
          near: 'london',
          query: searchTerm,
        }
        await axios.get(URL + new URLSearchParams(params))
          .then(response => {
            cache.current[searchTerm] = response.data.response.venues
            setVenues(response.data.response.venues)
              setStatus('fetched')
              setApiCall(apiCall+1)
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        const data = cache.current[searchTerm]
        setVenues(data)
        setStatus('fetched')
      }
    }
    fetchData()
  }, [searchTerm])
  console.log(venues)
  console.log(apiCall)
  return (
    <>
      <Search
        setSearchTerm={setSearchTerm}
        setClientId={setClientId}
        setClientSecret={setClientSecret}
      />
      {status === 'fetching' && <Loader />}
      {status === 'fetched' && <VenueList venues={venues} />}
    </>
  );
}

export default App;
