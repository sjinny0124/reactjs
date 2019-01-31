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
      <div onMouseOver={this.handleOnHover}>
        <li className="TodoListItem">
          <Checkbox checked={completed} />
          <span>{name}</span>

          {this.state.isMouse ? (
            <Icon type={'edit'} className={'btn-update'}>
              수정
            </Icon>
          ) : (
            <Icon type={'delete'} className={'btn-delete'}>
              삭제
            </Icon>
          )}
        </li>
      </div>
    );
  }
}

export default TodoListItem;
