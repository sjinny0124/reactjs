import React from 'react';
import {Checkbox, Icon} from 'antd';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouse: true,
    };
  }

  handleOnHover = () => {
    this.setState({
      isMouse: false,
    });
  };

  render() {
    const {name, completed} = this.props;
    return (
      <li className="TodoListItem">
        <Checkbox checked={completed} />
        <span>{name}</span>
        <Icon type="edit" />
        <Icon type="delete" className={'btn-delete'} />
      </li>
    );
  }
}

export default TodoListItem;
