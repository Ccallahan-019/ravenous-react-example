import '../css/searchBarStyles.css';

function SearchBar({
    searchTerm,
    location,
    sortOption,
    onOptionClick,
    onSearchTermChange,
    onLocationChange,
    onSearch
}) {
    return (
        <div className='searchBarContainer'>
            <div
                className='searchBarBackground'
            ></div>
            <div className='searchBarOverlay'></div>
            <form
                className='searchBarContent'
                onSubmit={(event) => {onSearch(event, location)}}
            >
                <div className='sortOptions'>
                    <button
                        type='button'
                        className={`sortOption ${sortOption === 'best_match' ? 'activeSortOption' : ''}`}
                        value={'best_match'}
                        onClick={onOptionClick}
                    >
                        Best Match
                    </button>
                    <button
                        type='button'
                        className={`sortOption ${sortOption === 'rating' ? 'activeSortOption' : ''}`}
                        value={'rating'}
                        onClick={onOptionClick}
                    >
                        Highest Rated
                    </button>
                    <button
                        type='button'
                        className={`sortOption ${sortOption === 'review_count' ? 'activeSortOption' : ''}`}
                        value={'review_count'}
                        onClick={onOptionClick}
                    >
                        Most Reviewed
                    </button>
                </div>
                <div className='searchInputs'>
                    <input
                        className='searchInput'
                        type='text'
                        id='business'
                        name='business'
                        placeholder='Search Businesses'
                        onChange={onSearchTermChange}
                    />
                    <input
                        className='searchInput'
                        type='text'
                        id='location'
                        name='location'
                        placeholder='Where?'
                        onChange={onLocationChange}
                    />
                </div>
                <button className='searchButton' type='submit'>Let's Go</button>
            </form>
        </div>
    )
}

export default SearchBar;