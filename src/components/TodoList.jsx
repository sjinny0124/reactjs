import React from 'react';
import './TodoList.css'

class TodoList extends React.Component {
  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    const { title, items } = this.props;

    return (
      <div className="TodoList">
        <h2>{title}</h2>
        <ul>
          {items.map((item, index)=> {
            const {name, completed } = item;
            return (
              <li key={`todo-item-${index}`}><input type="checkbox" checked={completed}/>{name}</li>);
          })}
        </ul>
      </div>
    );
  }
};

export default TodoList;
