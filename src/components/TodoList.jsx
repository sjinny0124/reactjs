import React from 'react';
import './TodoList.less';
import TodoListItem from './TodoListItem';
import {Input, Button} from 'antd';

class TodoList extends React.Component {
  static defaultProps = {
    items: [
      {name: 'React 개발에 필요한 환경을 구축한다.', completed: false},
      {name: '새로운 자바스크립트 문법을 익힌다.', completed: true},
      {name: '개발 편의를 위한 VSCode IDE를 익힌다.', completed: false},
      {name: '기본적인 Git 사용법을 익힌다.', completed: true},
      {name: 'PR 코드 리뷰를 응요한 개발 프로세스를 익힌다.', completed: true},
      {name: 'React 로 간단한 노트 앱을 만들어 본다.', completed: false},
    ],
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleTitleClick() {
    console.log('click', this);
  }

  render() {
    const {title, items} = this.props;

    return (
      <div className="TodoList">
        <div className="InputBox">
          <Input addonAfter={<Button type="primary">입력</Button>} />
        </div>
        <div className="">
          <h2 onClick={() => this.handleTitleClick()}>{title}</h2>
          <div>
            {items.map((item, index) => {
              return (
                <TodoListItem key={`item-${index}`} {...item} index={index} />
              );
            })}
          </div>
          <div>
            <Button>전체선택</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
