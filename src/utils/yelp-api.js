const apiKey = process.env.REACT_APP_YELP_API_KEY;
const baseURL = 'https://api.yelp.com/v3/';

export const fetchBusinesses = async (searchTerm, location, sortOption) => {
    const endpoint = 'businesses/search';
    const params = `?term=${searchTerm}&location=${location}&sort_by=${sortOption}`;
    const url = baseURL + endpoint + params;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            }
        });

        if (response.ok) {
            const result = await response.json();
            const businesses = result.businesses;
            
            return businesses;
        }

        throw new Error('Request Failed.');
    } catch (error) {
        console.log(error);
    }
}

