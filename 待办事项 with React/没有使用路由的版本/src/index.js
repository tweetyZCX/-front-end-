import React, {Fragment, Component, createRef} from 'react';
import ReactDOM from 'react-dom';

import './main.css';
import TodoList from './components/todolist'


ReactDOM.render(
  <TodoList/>
  ,
  document.getElementById('root')
)
