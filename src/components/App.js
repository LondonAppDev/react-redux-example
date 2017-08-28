import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    return (

      <MuiThemeProvider>
        <div className="App">
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
