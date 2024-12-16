import '../css/businessStyles.css';

function Business({ business }) {
    return (
        <div className='businessContainer'>
            <div className='businessHeader'>
                <img
                    className='businessImage'
                    src={business.image_url}
                    alt={business.name}
                />
                <p className='businessName'>{business.name}</p>
            </div>
            <div className='businessInformation'>
                <div className='businessAddress'>
                    <div>
                        <p>{business.location.address1}</p>
                        <p>{business.location.city}</p>
                        <p>{`${business.location.state} ${business.location.zip_code}`}</p>
                    </div>
                </div>
                <div className='businessDetailsContainer'>
                    <div className='businessDetails'>
                        <p>{business.categories[0].title.toUpperCase()}</p>
                        <p>{`${business.rating} stars`}</p>
                        <p className='businessDetails reviewCount'>{`${business.review_count} reviews`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;