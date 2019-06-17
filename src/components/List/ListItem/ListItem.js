import React from 'react'
import PropTypes from 'prop-types';

import './ListItem.scss';

const List = (props) => {
    return (
        <div className="container-item">
             <span className="item-details">{props.index_item}. {props.list_item.position_title} {props.list_item.organization_name}</span>
        </div>
    )
}

List.propTypes = {
 list_item : PropTypes.object.isRequired,
 index_item: PropTypes.number.isRequired
}

export default List
