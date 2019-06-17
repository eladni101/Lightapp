import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

const ProtectedRoute = ({ component: Component, render,title,...rest  }) => (
    <Route
        {...rest}
        render={props =>
            title ?
            <Component {...props} ></Component>
             : (
                <Redirect
                    to={{
                        pathname: '/',
                    }}
                />
            )
        }
    />
);

const mapStateToProps = (state) => {
    return {
      title:  state.jobs.title,
    }
};
  
  
export default connect(mapStateToProps)(ProtectedRoute);


