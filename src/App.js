import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import { Search, VenueList, Loader } from './components'

const URL = 'https://api.foursquare.com/v2/venues/search?'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [clientId, setClientId] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [venues, setVenues] = useState([])
  const [status, setStatus] = useState('idle')
  const cache = useRef([])

  const fetchData = async () => {
    const params = {
      client_id: clientId,
      client_secret: clientSecret,
      v:20200226,
      near: 'london',
      query: searchTerm,
    }
    if (!cache.current[searchTerm]) {
      return await axios.get(URL + new URLSearchParams(params))
        .then(response => {
          if (response.data.response.venues) {
            cache.current[searchTerm] = response.data.response.venues
            setVenues(response.data.response.venues)
            setStatus('fetched')
          }
        })
        .catch(error => {
          setStatus('error')
          console.log(error)
        })
    } else {
      const data = cache.current[searchTerm]
      setVenues(data)
      setStatus('fetched')
    }
  }

  useEffect(() => {
    if (searchTerm.trim()) {
      setStatus('fetching')
      const delay = setTimeout(() => {
        fetchData();
      }, 5000)
      return () => clearTimeout(delay);
    } else {
      setStatus('idle')
    } // eslint-disable-next-line
  }, [searchTerm, clientId, clientSecret])

  return (
    <>
      <Search
        setSearchTerm={setSearchTerm}
        setClientId={setClientId}
        setClientSecret={setClientSecret}
      />
      {status === 'not-found' && <h3 className="error-msg">Oops! not found, try another venue</h3>}
      {status === 'fetching' && <Loader />}
      {status === 'fetched' && <VenueList venues={venues} />}
      {status === 'error' && <h3 className="error-msg">Incorrect Credentials</h3>}
    </>
  );
}

export default App;
