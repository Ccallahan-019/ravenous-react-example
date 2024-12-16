import './App.css';
import './variables.css';
import BusinessList from './components/businesses/BusinessList';
import SearchBarContainer from './components/search-bar/SearchBarContainer';
import { useState } from 'react';

function App() {
  const [businessData, setBusinessData] = useState(null);
  const [searching, setSearching] = useState(false);

  const handleSearching = () => {
    setSearching(true);
  }

  const handleSearch = (data) => {
    setBusinessData(data);
    setSearching(false);
  }

  return (
    <div className="App">
      <h1 className='title'>ravenous</h1>
      <SearchBarContainer  onSearch={handleSearch} onSearching={handleSearching}  />
      <div className={`placeholder ${(!searching & !businessData) ? '': 'hidden'}`}>
        Search for restaurants to see results!
      </div>
      <div className={`placeholder ${searching ? '': 'hidden'}`}>
        Retrieving your search results...
      </div>
      {businessData && (
        <BusinessList businesses={businessData} />
      )}
    </div>
  );
};

export default App;
