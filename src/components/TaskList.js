import React from "react";
import Task from "./Task";
import { v4 as uuid} from "uuid";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task key={uuid()} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
