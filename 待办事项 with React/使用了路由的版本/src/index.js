import React, {Fragment, Component, createRef} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './main.css';
import TodoList from './components/todolist'


ReactDOM.render(
  <Router>
    <Route path = '/' component = {TodoList}/>
  </Router>
  ,
  document.getElementById('root')
)
