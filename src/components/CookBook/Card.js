import React from 'react';
import Lozenge from './Lozenge';
import PropTypes from 'prop-types';

function Card({title="Filler text for now", ingredientsList = [], quickInfo = []}) {
  return (
    <div className='card-container'>
        <div className='card-header'>
            {title}
        </div>
        <div className='quick-info'>
            {quickInfo.map((info) => (
                <Lozenge type={info.type} value={info.value} />
            ))}
        </div>
        <div className='ingred-list'>
            {ingredientsList.join(", ")}
        </div>
    </div>
  )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    ingredientsList: PropTypes.arrayOf(PropTypes.string),
    quickInfo: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf(["time", "prep", "protein", "link"]),
      value: PropTypes.string,
    })),
}

export default Card