import { FiClock } from 'react-icons/fi';
import { GiMeat } from 'react-icons/gi';
import { PiKnifeFill } from 'react-icons/pi';
import PropTypes from 'prop-types';

import "./Lozenge.css";

export const Lozenge = ({type, value}) => {
    let icon = "";
    switch(type) {
        case "time":
            icon = <FiClock size={19} />;
            break;
        case "prep":
            icon = <PiKnifeFill size={19} />;
            break;
        case "protein":
            icon = <GiMeat size={20} />;
            break;
        default:
            icon = "";
            break;
    }

    if (type === "link") {
        return (
            <div className='loz-container'>
                <a href={value}>Source</a>
            </div>
        );
    }

    return (
        <div className='loz-container'>
            {icon}<span className='loz-content-spacer' />{value}
        </div>
    )
}

Lozenge.propTypes = {
    type: PropTypes.oneOf(["time", "prep", "protein", "link"]),
    value: PropTypes.string,
}

export default Lozenge;
