import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import LectureGoalList from './components/LectureGoalList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to React</p>
        </header>
        <LectureGoalList />
      </div>
    );
  }
}

export default App;
