import React, { Component } from 'react';
import { Bar} from 'react-chartjs-2';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './Home.scss';
import BasicCard from '../../components/BasicCrad/BasicCard';
import ClickableCard from '../../components/ClickableCard/ClickableCard';
import {set_title} from '../../stroe/actions/jobs.act';
import {bar} from './bar-data';

 class Home extends Component {
  navgiteToFeaturesPage  = () => { 
    this.props.set_title('First Page - 33');
    this.props.history.push({
      pathname: '/features',
      state: { title_from_route: 'First Page - 33' }
    })
  }
  
  render() {
    return (
      <div className='containter-home'>
         <div className='header'>
            <BasicCard title="First Page" sub_title="33"></BasicCard>
            <ClickableCard title="To Features Page" clickFunction={this.navgiteToFeaturesPage}></ClickableCard>
         </div>
         <div className="chart-wrapper">
              <Bar data={bar}  height={70} />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  set_title: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {

  }
};


export default connect(mapStateToProps, {set_title})(Home);
