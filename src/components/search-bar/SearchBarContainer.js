import SearchBar from './SearchBar';
import { useState } from 'react';

function SearchBarContainer() {
    const [searchTerm, setSearchTerm] = useState(null);
    const [location, setLocation] = useState(null);
    const [sortOption, setSortOption] = useState(null);

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
    const handleSearch = (event, searchTerm, location, sortOption) => {
        event.preventDefault();

        // check if every param has been set before searching
        if (searchTerm && location && sortOption) {
            console.log(`Searching Yelp with ${searchTerm}, ${location}, ${sortOption}`);
        } else {
            console.log('Search must include a search term, location, and sort option. Please try again.')
        };
    };

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