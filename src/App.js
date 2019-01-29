import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Todos from './components/Todos';

class App extends Component {
  state = {
    data: [
      {name: 'React 개발에 필요한 환경을 구축한다.', completed: true},
      {name: '새로운 자바스크립트 문법을 익힌다.', completed: true},
      {name: '개발 편의를 위한 VSCode IDE를 익힌다.', completed: false},
      {name: '기본적인 Git 사용법을 익힌다.', completed: true},
      {name: 'PR 코드 리뷰를 응요한 개발 프로세스를 익힌다.', completed: true},
      {name: 'React 로 간단한 노트 앱을 만들어 본다.', completed: true},
    ],
    isUnmount: false,
  };

  componentDidMount() {
    setTimeout(() => {
      const items = this.state.data;
      const data = items.map(item => {
        item.completed = true;
        return item;
      });
      this.setState({
        data: data,
      });
    }, 5000);

    setTimeout(() => {
      this.setState({
        isUnmount: true,
      });
    }, 10000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to React</p>
        </header>
        {!this.state.isUnmount && (
          <Todos title={'강의목표'} items={this.state.data} />
        )}
      </div>
    );
  }
}
export default App;
