import React from 'react'
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({upadte_text , placeholder}) => {
    return (
        <div className='input-wrapper'>
             <input className="input" placeholder={placeholder} onChange={upadte_text}></input>
        </div> 
    )
}

Input.propTypes = {
 upadte_text : PropTypes.func.isRequired,
 placeholder:  PropTypes.string,
}

export default Input
