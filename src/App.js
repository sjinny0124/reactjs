import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import TodoList from './components/TodoList';
import Toggle from './components/Toggle';
import Header from './components/Header';
import MarkEditor from './components/MarkEditor';
import ControlledForm from './components/ControlledForm';

class App extends Component {
  state = {
    data: [
      {name: 'React 개발에 필요한 환경을 구축한다.', completed: false},
      {name: '새로운 자바스크립트 문법을 익힌다.', completed: true},
      {name: '개발 편의를 위한 VSCode IDE를 익힌다.', completed: false},
      {name: '기본적인 Git 사용법을 익힌다.', completed: true},
      {name: 'PR 코드 리뷰를 응요한 개발 프로세스를 익힌다.', completed: true},
      {name: 'React 로 간단한 노트 앱을 만들어 본다.', completed: false},
    ],
    isUnmount: false,
    isTimerUnmount: false,
  };

  handleExpireTimer = () => {
    console.log('타이머가 종료되었습니다.');
    this.setState({
      isTimerUnmount: true,
    });
  };

  render() {
    return (
      <div className="App">
        <ControlledForm />
        <MarkEditor />
        <Header />
        <Toggle />
        {!this.state.isUnmount && (
          <TodoList title={'강의목표'} items={this.state.data} />
        )}

        {this.state.isTimerUnmount && (
          <Timer
            expireDate={`2019-01-30T13:42:00+09:00`}
            onExpired={this.handleExpireTimer}
          />
        )}
      </div>
    );
  }
}
export default App;
