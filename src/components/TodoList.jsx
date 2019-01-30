import React from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    //this.handleTitleClick = this.handleTitleClick.bind(this);
  }

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
        <h2 onClick={() => this.handleTitleClick()}>{title}</h2>
        <ul>
          {items.map((item, index) => {
            return <TodoListItem {...item} index={index} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
