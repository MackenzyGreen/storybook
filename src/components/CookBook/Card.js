import React from 'react';
import Lozenge from './Lozenge';
import PropTypes from 'prop-types';
import './Card.css';
import { PiDotOutlineFill } from 'react-icons/pi';

function Card({title="Filler text for now", ingredientsList = [], quickInfo = []}) {
  return (
    <div className='card-container'>
      <span>
        <h2 className='card-header'>
            {title}
        </h2>
        <div className='quick-info'>
            {quickInfo.map((info, i) => (
                <>
                  <Lozenge type={info.type} value={info.value} />
                  {i+1 !== quickInfo.length ? <PiDotOutlineFill size={19}/> : ''}
                </>
            ))}
        </div>
        </span>
        <div className='ingred-list'>
            <b>Ingredients: </b><span className='ingreds'>{ingredientsList.join(", ")}</span>
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