import './css/searchBarStyles.css'

function SearchBar() {
    return (
        <div className='searchBarContainer'>
            <div
                className='searchBarBackground'
            ></div>
            <div className='searchBarOverlay'></div>
            <div className='searchBarContent'>
                <div className='searchOptions'>
                    <button className='searchOption'>Best Match</button>
                    <button className='searchOption'>Highest Rated</button>
                    <button className='searchOption'>Most Reviewed</button>
                </div>
                <div className='searchInputs'>
                    <input
                        className='searchInput'
                        type='text'
                        id='business'
                        name='business'
                        placeholder='Search Businesses'
                    />
                    <input
                        className='searchInput'
                        type='text'
                        id='location'
                        name='location'
                        placeholder='Where?'
                    />
                </div>
                <button className='searchButton'>Let's Go</button>
            </div>
        </div>
    )
}

export default SearchBar;