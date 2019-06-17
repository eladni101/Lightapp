import React from 'react'
import PropTypes from 'prop-types';

import './ClickableCard.scss';

const ClickableCard = (props) => {
    return (
        <div className='clickable-card' onClick={props.clickFunction}>
              <h1>{props.title}</h1>
        </div> 
    )
}

ClickableCard.propTypes = {
 title: PropTypes.string,
 clickFunction : PropTypes.func.isRequired
}

export default ClickableCard
