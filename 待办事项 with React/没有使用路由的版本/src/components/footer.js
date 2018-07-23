import React, {Component} from 'react'

export default function(props){
  let {
    view,
    changeView,
    clearHasCompleted,
    shouldShowClearButton,
    leftItemNumber
  } = props;
  return (
       <footer className="footer">
          <span className="todo-count">
            <strong> {leftItemNumber} </strong>
          <span>项未完成</span>
          </span>
          <ul className="filters">
            <li>
              <a
                className={view == 'all' ? "selected" : ""}
                onClick={()=>changeView('all')}
              >所有</a>

            </li>
            <li>
              <a
                className={view == 'active' ? "selected" : ""}
                onClick={()=>changeView('active')}
              >未完成</a>

            </li>
            <li>
              <a
                className={view == 'completed' ? "selected" : ""}
                onClick={()=>changeView('completed')}
              >已完成</a>

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
