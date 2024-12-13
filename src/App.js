import './App.css';
import './variables.css'
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <h1 className='title'>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
