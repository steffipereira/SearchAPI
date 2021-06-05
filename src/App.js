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
  const [error, setError] = useState(false)
  const cache = useRef([])

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        client_id: clientId,
        client_secret: clientSecret,
        v:20200226,
        near: 'london',
        query: searchTerm,
      }
      if (!cache.current[searchTerm]) {
        const response = await axios.get(URL + new URLSearchParams(params))
          .then(response => response.data.response.venues)
          .catch(error => {
            console.log(error)
          })
        if (response.length) {
          cache.current[searchTerm] = response
          setVenues(response)
          setStatus('fetched')
          setError(false)
          return
        }
        setError(true)
        setStatus('idle')
        } else {
          const data = cache.current[searchTerm]
          setVenues(data)
          setStatus('fetched')
          setError(false)
        }
      }

      if (searchTerm.trim()) {
        setStatus('fetching')
        const delay = setTimeout(() => {
          fetchData();
        }, 2000)
        return () => clearTimeout(delay);
      } else {
        setError(false)
        setStatus('idle')
      }
    }, [searchTerm, clientId, clientSecret])
    console.log(venues)
    console.log(cache.current)
    return (
      <>
      <Search
        setSearchTerm={setSearchTerm}
        setClientId={setClientId}
        setClientSecret={setClientSecret}
        />
      {error && <h3 style={{ textAlign: 'center', margin: '2rem'}}>Oops! not found, try another venue</h3>}
      {status === 'fetching' && <Loader />}
      {status === 'fetched' && <VenueList venues={venues} />}
    </>
  );
}

export default App;
