import React from 'react';
import 'components/AppRouter.less';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from 'components/Navigation';
import TodoList from 'components/TodoList';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

class Index extends React.Component {
  constructor(props) {
    super(props);

    console.log('Index constructor');
  }

  render() {
    return (
      <Page>
        <h2>Home</h2>
      </Page>
    );
  }

  componentDidMount() {
    console.log('Index componentDidMount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Index componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('Index componentWillUnmount');
  }
}

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log('About constructor', this.props);
  }

  render() {
    return (
      <Page>
        <h2>About</h2>
      </Page>
    );
  }

  componentDidMount() {
    console.log('About componentDidMount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('About componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('About componentWillUnmount');
  }
}

const AppRouter = () => (
  <Router>
    <div className={'AppRouter'}>
      <Navigation />
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/todo-list/" component={TodoList} />
    </div>
  </Router>
);

export default AppRouter;
