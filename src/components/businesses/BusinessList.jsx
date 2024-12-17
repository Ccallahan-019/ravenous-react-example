import Business from "./Business";
import '../../styles/businessStyles.css';

function BusinessList({ businesses, location }) {
    return (
        <div className="businessList">
            <div className="businessListHeader">
                Viewing Restaurants Near {location}
            </div>
            {businesses.map((business, index) =>
                <Business key={index} business={business} />
            )}
        </div>
    );
};

export default BusinessList;
