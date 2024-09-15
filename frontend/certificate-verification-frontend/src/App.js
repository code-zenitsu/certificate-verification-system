
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import StudentPortal from './components/StudentPortal';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/" component={StudentPortal} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
