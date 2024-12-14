import './App.css';
import './variables.css';
import BusinessList from './components/BusinessList';
import SearchBarContainer from './components/search-bar/SearchBarContainer';
import { businesses } from './data/businesses';

function App() {
  return (
    <div className="App">
      <h1 className='title'>ravenous</h1>
      <SearchBarContainer />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
