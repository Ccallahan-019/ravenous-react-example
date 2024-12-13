import './css/businessStyles.css'

function Business() {
    const business = {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    }

    return (
        <div className='businessContainer'>
            <div className='businessHeader bolded'>
                <img
                    className='businessImage'
                    src={business.imageSrc}
                    alt={business.name}
                />
                <p>{business.name}</p>
            </div>
            <div className='businessInformation'>
                <div className='businessAddress'>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{`${business.state} ${business.zipCode}`}</p>
                </div>
                <div className='businessDetails'>
                    <p className='bolded'>{business.category}</p>
                    <p className='bolded'>{`${business.rating} stars`}</p>
                    <p>{`${business.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    );
};

export default Business;