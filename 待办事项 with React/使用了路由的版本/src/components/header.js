import React, { Component } from 'react'

export default class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<header className="header">
          <h1>待办清单</h1>
          {/* 输入框 */}
          <input
            type="text"
            className="new-todo"
            placeholder="输入新的待办事项"
            onKeyDown= {this.props.addTodo}
            ref= {this.props.getInput}
          />
        </header>
		)
	}
}
