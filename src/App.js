import React, { useEffect } from 'react';
import axios from 'axios'

const URL = 'https://api.foursquare.com/v2/venues/search?'
const CLIENT_ID = 'J450J0JCLAP3WX3A3TDDNVKX4GADORLP5HGTUKICRDDDCK5N'
const CLIENT_SECRET = 'JF423FZLNIZFUELD3SDE5OVMNT4ORPPGABGIW4FLIEHW3GGI'

function App() {
  useEffect(() => {
    const fetchData = () => {
      const params = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        v:20200226,
        near: 'london',
        limit: 10,
        query: 'cafe',
      }
      axios.get(URL + new URLSearchParams(params))
      .then(response => console.log((response.data.response.venues))
      )
      .catch(error => {
        console.log(error)
      })
    }
    fetchData()
  }, [])
  return (
    <h2>Test</h2>
  );
}

export default App;
