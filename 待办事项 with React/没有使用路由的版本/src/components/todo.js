import React, {
	Component,
	createRef
} from 'react'

export default class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inEdit:false
		}
		this.editInput = createRef();
	}

	onEdit=()=>{
		if (this.props.hasCompleted == true) return;
		this.setState({
			inEdit:true
		},()=>this.editInput.current.focus());
		this.editInput.current.value = this.props.content;
	}

	onBlur=()=>{
		if (!this.state.inEdit) return;
		this.setState({
			inEdit:false
		});
		this.commitAlter();
	}

	onKeyDown=(event)=>{
		if (event.keyCode == 13 || event.keyCode == 27) {
		 this.setState({
			 inEdit:false
		 });
	 }
	  if (event.keyCode == 13) {
			this.commitAlter();
		}
	}

	commitAlter=()=>{
		let content = this.editInput.current.value.trim();
		if (content) {
			this.props.alterTodoContent(this.props.id, content);
		}else{
			this.props.deleteTodo(this.props.id);
		}

	}

	render() {
		let {
			content,
			deleteTodo,
			id,
			hasCompleted,
			toggleTodo,
			alterTodoContent
		} = this.props;
		let {inEdit} = this.state;
		let className = inEdit ? "editing" : '';
		className = hasCompleted ? className + "completed" :className;
		return ( <
			li
			//className="completed"
			//className="editing"
			className = {className}
			>
			<div className="view">
                {/* 勾选按钮 */}
                <input
                  type = "checkbox"
                  className = "toggle"
                  checked = {hasCompleted}
									onChange = {()=>toggleTodo(id)}
                />
                {/* todo 的内容 */}
                <label
									ref = "label"
									onDoubleClick = {this.onEdit}
									>
                  {content}
                </label>
                {/* 删除按钮 */}
                <button
                  className="destroy"
                  ref="btn"
                  onClick = {()=>{
                  	deleteTodo(id);
                  }}
                ></button>
              </div> { /* 编辑 todo 的输入框 */ }
			         <input
                type = "text"
                className = "edit"
                ref = {this.editInput}
								onBlur = {this.onBlur}
								onKeyDown = {this.onKeyDown}
               /> <
			/li>
		);
	}
}
