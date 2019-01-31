import React from 'react';
import {Button, Input, Modal} from 'antd';
import './Counter.less';

const Search = Input.Search;

class Counter extends React.Component {
  /*state = {
    count: 0,
  };*/

  //count = 0;
  constructor(props) {
    super(props);
    this.count = 0;
    this.state({
      open: false,
    });
  }

  handleClick = e => {
    this.count = this.count + 1;

    if (this.count === 10) {
      this.forceUpdate();
      this.setState({
        open: true,
      });
    }
    /*this.setState(prevState => {
      return {count: prevState.count + 1};
    });
    this.setState(prevState => {
      return {count: prevState.count + 1};
    });
    this.setState(prevState => {
      return {count: prevState.count + 1};
    });
    this.setState(prevState => {
      return {count: prevState.count + 1};
    });*/

    /* this.setState({count: this.state.count + 1});
    this.setState({count: this.state.count + 1});
    this.setState({count: this.state.count + 1});
    this.setState({count: this.state.count + 1});*/
  };

  handleSearch = value => {
    console.log(value);
  };

  render() {
    console.log('render...', this);
    return (
      <div className="Counter">
        <header className="App-header">
          {this.count}

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

          <Button onClick={this.handleClick}>카운터</Button>
        </header>
      </div>
    );
  }
}

export default Counter;
