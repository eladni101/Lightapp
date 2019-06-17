import React  from 'react'
import PropTypes from 'prop-types';

import './List.scss';
import ListItem from './ListItem/ListItem';
const List = ({list}) => {
    return (
        <div className="container-list">
            {list.map((item,index) =>{
                return (
                    <ListItem list_item={item} index_item={index} key={""+index}></ListItem>
                )
            })}
            {!list.length ? <div className="no-match">There no results</div> : null}
        </div>
    )
}

List.propTypes = {
 list : PropTypes.array.isRequired
}

export default List
