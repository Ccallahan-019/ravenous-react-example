import SearchBar from './SearchBar';
import { fetchBusinesses } from '../../utils/yelp-api';
import { useEffect, useState } from 'react';

function SearchBarContainer({ onSearch, onSearching, onLocationChange }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('New York, NY');
    const [sortOption, setSortOption] = useState(null);
    const [searching, setSearching] = useState(false);

    // function to handle search option choice
    const handleClick = (event) => {
        setSortOption(event.target.value);
    };

    // function to handle changes in search term input
    const handlerSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // function to handle changes in location input
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    // function to handle search submit
    const handleSearch = (event, location) => {
        event.preventDefault();

        // check if location param has been set before searching
        if (!location) {
            setLocation('New York, NY');
        };

        setSearching(true);
    };
    
    // effect for fetching data
    useEffect(() => {
        let ignore = false;
        const fetchData = async () => {
            onSearching();
            const data = await fetchBusinesses(searchTerm, location, sortOption);
            if (!ignore) {
                onSearch(data);
                onLocationChange(location);
            }
        }

        fetchData();

        return () => {
            ignore = true;
            setSearching(false);
        }
    }, [searching, sortOption]); // call effect when user searches or changes sort option

    return (
        <SearchBar
            searchTerm={searchTerm}
            location={location}
            sortOption={sortOption}
            onOptionClick={handleClick}
            onSearchTermChange={handlerSearchTermChange}
            onLocationChange={handleLocationChange}
            onSearch={handleSearch}
        />
    );
};

export default SearchBarContainer;