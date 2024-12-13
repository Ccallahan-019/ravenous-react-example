import './App.css';
import './variables.css'
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import { businesses } from './data/businesses';

function App() {
  return (
    <div className="App">
      <h1 className='title'>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
