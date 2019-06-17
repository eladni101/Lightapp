import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './Features.scss';
import {get_jobs} from '../../stroe/actions/jobs.act';
import Input from '../../components/Input/Input';
import List from '../../components/List/List';
import Spinner from '../../components/Spinner/Spinner';
import BasicCrad from '../../components/BasicCrad/BasicCard';

class Features extends Component {
  constructor(props){
    super(props);
    this.state = { 
      search_word: '',
    }
    this.props.get_jobs();
  }

  findMatch(search_word){
    if(!search_word.length) return []; 
    const search_word_lower_case = search_word.toLowerCase();
    const match_array = this.props.jobs_list.filter( job => 
    job.position_title.toLowerCase().includes(search_word_lower_case));
    return match_array;
  }
  updateText = (event) => {
    this.setState({search_word: event.target.value});
  }
  render() {
    const {search_word} = this.state;
    const {jobs_list,title} = this.props;
    // const {title_from_route} = this.props.location.state; the sconed option
    if(!jobs_list.length){
      return (<Spinner></Spinner>)
    }
    const match_jobs =  this.findMatch(search_word);
    return (
      <div className="containter-features">
          <BasicCrad title={title}></BasicCrad>
          <Input upadte_text={this.updateText} placeholder="Search text"></Input>
          {search_word.length ? <List list={match_jobs}></List> : null}
      </div>
    );
  }
}

Features.propTypes = {
  get_jobs: PropTypes.func,
  jobs_list: PropTypes.array,
  title: PropTypes.string,
}

const mapStateToProps = (state) => {
  return {
    jobs_list: state.jobs.jobs_list,
    title:  state.jobs.title,
  }
};


export default connect(mapStateToProps, {get_jobs})(Features);
