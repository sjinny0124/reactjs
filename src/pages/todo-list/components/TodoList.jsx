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

  render() {
    const {items} = this.props;

    return (
      <div className="TodoList">
        <div className="InputBox">
          <Input addonAfter={<Button type="primary">입력</Button>} />
        </div>

        <div>
          <Button type="primary">전체선택</Button>
        </div>

        <div>
          {items.map((item, index) => {
            return (
              <TodoListItem key={`item-${index}`} {...item} index={index} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TodoList;
