import React from 'react';
import './ToDoCard.css';

const ToDoCard = () => {
  return (
    <div className="card">
      <div id="card-header" className="card-section">
        <div id="title">Title</div>
        <div id="due-date">Due</div>
      </div>
      <div id="card-body" className="card-section">
        <div id="desription">Description</div>
        <div id="sub-tasks">Sub tasks</div>
      </div>
      <div id="card-footer" className="card-section">
        <div id="complete">
          <input
            type="checkbox"
            id="completed-checkbox"
            name="completed-checkbox"
          />
          <label htmlFor="completed-checkbox">Complete</label>
        </div>
      </div>
    </div>
  );
};

export default ToDoCard;
