const apiKey = process.env.NEXT_PUBLIC_YELP_API_KEY;
const baseURL = 'https://api.yelp.com/v3/';

// fetch data from yelp API using input from user
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

        // if fetch succeeds, return business data
        if (response.ok) {
            const result = await response.json();
            const businesses = result.businesses;
            
            return businesses;
        }

        // if fetch fails, throw error
        throw new Error('Request Failed.');
    } catch (error) {
        console.log(error);
    }
}

