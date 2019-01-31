import React from 'react';

class TodoListItem extends React.Component {
  handleCheck() {
    this.setState({
      checked: !this.state.checked,
    });
  }
  render() {
    const {index, name, completed} = this.props;
    return (
      <li key={`todo-item-${index}`}>
        <input
          type="checkbox"
          checked={completed}
          onChange={this.handleCheck}
        />
        {name}
      </li>
    );
  }
}

export default TodoListItem;
