import Business from "./Business";
import './css/businessStyles.css'

function BusinessList() {
    return (
        <div className="businessList">
            <Business />
            <Business />
            <Business />
            <Business />
        </div>
    );
};

export default BusinessList;
