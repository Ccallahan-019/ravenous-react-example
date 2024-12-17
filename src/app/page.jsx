'use client'

import BusinessList from '../components/businesses/BusinessList';
import SearchBarContainer from '../components/search-bar/SearchBarContainer';
import { useState } from 'react';

function Home() {
    const [businessData, setBusinessData] = useState(null);
    const [searching, setSearching] = useState(false);
    const [location, setLocation] = useState('New York, NY');
  
    // function to handle transition between search and data retrieval completion
    const handleSearching = () => {
      setSearching(true);
    }
  
    // function to handle data retrieval completion
    const handleSearch = (data) => {
      setBusinessData(data);
      setSearching(false);
    }

    const handleLocationChange = (location) => {
        setLocation(location);
    }
  
    return (
      <div className="App">
        <h1 className='title'>ravenous</h1>
        <SearchBarContainer
            onSearch={handleSearch}
            onSearching={handleSearching}
            onLocationChange={handleLocationChange}
        />
        <div className={`placeholder ${searching ? '': 'hidden'}`}>
          Retrieving search results...
        </div>
        {businessData && (
          <BusinessList businesses={businessData} location={location} />
        )}
      </div>
    );
  };
  
  export default Home;