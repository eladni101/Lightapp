import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Features from './Pages/Features/Features';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
function App() {
  return (
    <Switch>
        <ProtectedRoute path="/features" component={Features} />
        <Route path="/" exact component={Home} />
     </Switch>
  );
}

export default App;
