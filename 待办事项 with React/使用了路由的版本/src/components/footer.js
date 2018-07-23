import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default function(props){
  let {
    clearHasCompleted,
    shouldShowClearButton,
    leftItemNumber,
    pathname
  } = props;
  return (
       <footer className="footer">
          <span className="todo-count">
            <strong> {leftItemNumber} </strong>
          <span>项未完成</span>
          </span>
          <ul className="filters">
            <li>
              <Link
                to="/"
                className={pathname == '/' ? "selected" : ""}
                >所有</Link>
            </li>
            <li>
              <Link
                to="/active"
                className={pathname == '/active' ? "selected" : ""}
                >未完成</Link>
            </li>
            <li>
              <Link
                to="/completed"
                className={pathname == '/completed' ? "selected" : ""}
                >已完成</Link>
            </li>
          </ul>
          {/* 清除完成按钮 */}
          {shouldShowClearButton && (
            <button
              className="clear-completed"
              onClick= {clearHasCompleted}
            >
              清空所有已完成
            </button>
          )}
        </footer>
      );
}
