// src/App.js
import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, Link, Router } from 'react-router-dom';

import Tab from './components/Tab';

const App = () => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    fetch('/tabs.json')
      .then(response => response.json())
      .then(data => setTabs(data));
  }, []);

  return (
    <Router>
      <div>
        <ul>
          {tabs.map(tab => (
            <li key={tab.id}>
              <Link to={`/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>

        <Switch>
          <Route path="/" exact>
            <Redirect to={`/${tabs[0].id}`} />
          </Route>
          <Route path="/:tabId">
            <Tab />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
