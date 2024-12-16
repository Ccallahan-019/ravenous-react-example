import Business from "./Business";
import '../css/businessStyles.css';

function BusinessList({ businesses }) {
    return (
        <div className="businessList">
            {businesses.map((business, index) =>
                <Business key={index} business={business} />
            )}
        </div>
    );
};

export default BusinessList;
