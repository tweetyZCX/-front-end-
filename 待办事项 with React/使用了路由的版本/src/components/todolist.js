import React, { Component, createRef, Fragment } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todo from './todo'
import Footer from './footer'
import Header from './header'
import '../main.css'

export default class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todoList: [],
		}

		this.todoInput = createRef();
	}

	addTodo = (event)=>{

		let { value } = this.todoInput.current;

		if (event.keyCode !== 13 || !value.trim()) return;

		let { todoList } = this.state;

		this.setState({
			todoList: [{
				content: value,
				id: Math.random(),
				hasCompleted: false
			}, ...todoList]
		}, () => {
			this.todoInput.current.value = '';
		})

	}

	deleteTodo = (id)=>{
		let { todoList } = this.state;
		todoList = todoList.filter((elt) => {
			return elt.id !== id;
		});

		this.setState({
			todoList
		})
	}

	toggleTodo = (id)=>{
		let { todoList } = this.state;
		todoList = todoList.map(elt=>{
			if(elt.id == id){
				elt.hasCompleted = !elt.hasCompleted;
			}
			return elt;
		})
		this.setState({
			todoList
		})
	}

	toggleAllTodo = (event)=>{
		let { todoList } = this.state;
		todoList = todoList.map((elt) => {
			elt.hasCompleted = event.target.checked
			return elt;
		});
		this.setState({
			todoList
		})
	}

	alterTodoContent = (id, content)=>{
		let { todoList } = this.state;
		todoList = todoList.map(elt=>{
			if (elt.id === id) {
				elt.content = content;
			}
			return elt;
		})
		this.setState({
			todoList
		})
	}

	clearHasCompleted = ()=>{
		let { todoList } = this.state;
		todoList = todoList.filter((elt) => {
			return !elt.hasCompleted;
		});
		this.setState({
			todoList
		})
	}

	render() {
		let {
			todoList,
			view
		} = this.state;
		let {location:{pathname}} = this.props;
		let activeTodo = todoList.find(elt=>elt.hasCompleted == false);
		let completedTodo = todoList.find(elt=>elt.hasCompleted);
		let leftItemNumber = 0;
		let showTodoData = todoList.filter(elt=>{
			if (!elt.hasCompleted) leftItemNumber++;
			switch (pathname) {
				case '/active':
					return !elt.hasCompleted;
				case '/completed':
					return elt.hasCompleted;
				case '/':
				default:
					return true;
			}
		})
		let todos = showTodoData.map(el => {
			return (
				<Todo
				content = {el.content}
				key = {el.id}
				deleteTodo = {this.deleteTodo}
				id = {el.id}
				hasCompleted = {el.hasCompleted}
				toggleTodo = {this.toggleTodo}
				alterTodoContent = {this.alterTodoContent}
				/>
			);
		})
		return (
			<div>
        <Header addTodo = {this.addTodo} getInput = {this.todoInput}/>
			{todoList.length > 0 && (
				<Fragment>
					<section className="main">
	          {/* 全选按钮 */}
	          <input
	            type = "checkbox"
	            className = "toggle-all"
							checked = {!activeTodo && todoList.length != 0}
							onChange = {this.toggleAllTodo}
	          />
	          <ul className="todo-list">
	            {todos}
	          </ul>
	        </section>
					<Footer
						{
							...{//这个花括号里面不能使用花括号了，否则会报错
								clearHasCompleted:this.clearHasCompleted,
								shouldShowClearButton:completedTodo && todoList.length != 0,
								leftItemNumber,
								pathname
							}
						}
					/>
				</Fragment>
			)}
        </div>
		);
	}
}
