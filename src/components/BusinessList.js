import Business from "./Business";
import './css/businessStyles.css'

function BusinessList(props) {
    return (
        <div className="businessList">
            {props.businesses.map(business =>
                <Business business={business} />
            )}
        </div>
    );
};

export default BusinessList;
