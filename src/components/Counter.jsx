import React from 'react';
import {Button, Input, Modal} from 'antd';
import './Counter.less';

const Search = Input.Search;

class Counter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      open: false,
      list: [1, 2, 3, 4, 5],
    };
  }

  handleClick = e => {
    const {list} = this.state;
    //let num = Math.random() * 1000;
    //num = Math.ceil(num);

    //console.log(num);
    const newList = [...list];

    this.setState({
      list: newList.filter((item, idx, arr) => {
        return item % 2 === 1;
      }),
    });
  };

  handleSearch = value => {
    console.log(value);
  };

  render() {
    console.log('render...', this);
    return (
      <div className="Counter">
        <header className="App-header">
          {this.state.list.map((item, idx) => {
            return <div key={`lit-item-${idx}`}>{item}</div>;
          })}

          <Button onClick={this.handleClick}>카운터</Button>

          <Search
            className={'Search'}
            placeholder="input search text"
            onSearch={this.handleSearch}
            enterButton
            style={{width: 320}}
          />

          <Modal title="Basic Modal" visible={this.state.open}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </header>
      </div>
    );
  }
}

export default Counter;
