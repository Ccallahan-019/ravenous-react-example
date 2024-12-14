import SearchBar from './SearchBar';
import { useState } from 'react';

function SearchBarContainer() {
    const [searchTerm, setSearchTerm] = useState(null);
    const [location, setLocation] = useState(null);
    const [sortOption, setSortOption] = useState(null);

    const onOptionClickHandler = (event) => {
        setSortOption(event.target.value)
    };

    const onSearchTermChangeHandler = (event) => {
        setSearchTerm(event.target.value)
    };

    const onLocationChangeHandler = (event) => {
        setLocation(event.target.value)
    };

    const onSearchHandler = (event, searchTerm, location, sortOption) => {
        event.preventDefault();

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
            onOptionClick={onOptionClickHandler}
            onSearchTermChange={onSearchTermChangeHandler}
            onLocationChange={onLocationChangeHandler}
            onSearch={onSearchHandler}
        />
    );
};

export default SearchBarContainer;