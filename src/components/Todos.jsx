import React from 'react';
import './Todos.css'

class Todos extends React.Component {
  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    const { title, items } = this.props;

    return (
      <div className="Todos">
        <h2>{title}</h2>
        <ul>
          {items.map((item, index)=> {
            return <li key={"s1"+index}><input type="checkbox" checked={item.completed}/>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
};

export default Todos;
