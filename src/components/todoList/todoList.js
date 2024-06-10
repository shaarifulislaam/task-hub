"use client"

import Task from "../task/task";

const TodoList = ({tasks}) => {

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Task</th>

              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((task) => (
             <Task key={task?.id} task={task}></Task>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
