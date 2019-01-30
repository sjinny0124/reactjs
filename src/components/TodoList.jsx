import React from 'react';
import './TodoList.css';

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
            const {name, completed} = item;
            return (
              <li key={`todo-item-${index}`}>
                <input type="checkbox" checked={completed} />
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
