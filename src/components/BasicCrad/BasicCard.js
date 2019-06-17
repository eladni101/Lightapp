import React from 'react'
import PropTypes from 'prop-types';

import './BasicCard.scss';
const BasicCard = (props) => {
    return (
        <div className='basic-card'>
              <h1>{props.title}</h1>
              <h2>{props.sub_title}</h2>
        </div> 
    )
}

BasicCard.propTypes = {
 title: PropTypes.string,
 sub_title: PropTypes.string
}

export default BasicCard
