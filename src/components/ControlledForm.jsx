import React from 'react';

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: '',
    };
  }

  handleSubmit(e) {
    alert('입력값을 서버로 전송합니다:' + this.state.value);
    e.preventDefault();
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            value={this.state.value}
            type="text"
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ControlledForm;
