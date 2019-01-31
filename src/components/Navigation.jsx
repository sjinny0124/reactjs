import React from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';

const Navigation = () => (
  <nav>
    <Menu
      mode="horizontal"
      onSelect={({item, key, selectedKeys}) => {
        console.log(item, key, selectedKeys);
      }}>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/about/">About</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/todo-list/">TodoList</Link>
      </Menu.Item>
    </Menu>
  </nav>
);
export default Navigation;
