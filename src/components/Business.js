import './css/businessStyles.css';

function Business(props) {
    return (
        <div className='businessContainer'>
            <div className='businessHeader bolded'>
                <img
                    className='businessImage'
                    src={props.business.imageSrc}
                    alt={props.business.name}
                />
                <p>{props.business.name}</p>
            </div>
            <div className='businessInformation'>
                <div className='businessAddress'>
                    <p>{props.business.address}</p>
                    <p>{props.business.city}</p>
                    <p>{`${props.business.state} ${props.business.zipCode}`}</p>
                </div>
                <div className='businessDetails'>
                    <p className='bolded'>{props.business.category}</p>
                    <p className='bolded'>{`${props.business.rating} stars`}</p>
                    <p>{`${props.business.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    );
};

export default Business;