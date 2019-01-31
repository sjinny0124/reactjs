import React from 'react';
import './AppRouter.less';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Navigation';
import TodoList from './TodoList';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

const AppRouter = () => (
  <Router>
    <div className={'AppRouter'}>
      <Navigation />
      <Route path="/" exact component={Index} />
      <Route path="/about/" exact component={About} />
      <Route path="/todo-list/" exact component={TodoList} />
    </div>
  </Router>
);

export default AppRouter;
