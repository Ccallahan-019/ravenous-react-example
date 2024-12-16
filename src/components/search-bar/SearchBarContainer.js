import SearchBar from './SearchBar';
import { fetchBusinesses } from '../../utils/yelp-api';
import { useEffect, useState } from 'react';

function SearchBarContainer({ onSearch, onSearching }) {
    const [searchTerm, setSearchTerm] = useState(null);
    const [location, setLocation] = useState(null);
    const [sortOption, setSortOption] = useState(null);
    const [searched, setSearched] = useState(false);
    const [searching, setSearching] = useState(false);

    // function to handle search option choice
    const handleClick = (event) => {
        setSortOption(event.target.value)
    };

    // function to handle changes in search term input
    const handlerSearchTermChange = (event) => {
        setSearchTerm(event.target.value)
    };

    // function to handle changes in location input
    const handleLocationChange = (event) => {
        setLocation(event.target.value)
    };

    // function to handle search submit
    const handleSearch = (event, location) => {
        event.preventDefault();

        // check if every param has been set before searching
        if (location) {
            setSearched(true);
            setSearching(true);
        } else {
            console.log('Search must include a location. Please try again.')
        };
    };

    useEffect(() => {
        let ignore = false;
        const fetchData = async () => {
            onSearching();
            const data = await fetchBusinesses(searchTerm, location, sortOption);
            if (!ignore) {
                onSearch(data);
            }
        }

        if (searched) {
            fetchData();
        }

        return () => {
            ignore = true;
            setSearching(false);
        }
    }, [searching, sortOption]);

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