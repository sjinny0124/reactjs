import React, {Component} from 'react';
import './App.less';
import Timer from './components/Timer';
import TodoList from './components/TodoList';
import Toggle from './components/Toggle';
import Header from './components/Header';
import MarkEditor from './components/MarkEditor';
import ControlledForm from './components/ControlledForm';
import Counter from './components/Counter';
import {Button} from 'antd';

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
    isTimerUnmount: true,
  };

  handleExpireTimer = () => {
    console.log('타이머가 종료되었습니다.');
    this.setState({
      isTimerUnmount: false,
    });
  };

  render() {
    return (
      <div className="App">
        <Counter />
        <Button type="primary" shape="circle" icon="search" />
        <Button type={'primary'}>스타일 버튼</Button>
        {/*<ControlledForm />*/}
        {/*<MarkEditor />*/}
        {/*<Header />*/}
        {/*<Toggle />*/}

        {this.state.isTimerUnmount && (
          <Timer
            expireDate={`2019-02-01T18:00:00+09:00`}
            onExpired={this.handleExpireTimer}
          />
        )}

        {!this.state.isUnmount && (
          <TodoList title={'강의목표'} items={this.state.data} />
        )}
      </div>
    );
  }
}
export default App;
