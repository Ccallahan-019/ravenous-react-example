import Business from "./Business";
import './css/businessStyles.css';

function BusinessList(props) {
    return (
        <div className="businessList">
            {props.businesses.map((business, index) =>
                <Business key={index} business={business} />
            )}
        </div>
    );
};

export default BusinessList;
