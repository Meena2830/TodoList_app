import React from "react";
import { Task } from "../interfaces/Task";
import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

interface TaskListProps {
  tasks: Task[];
  filter: "all" | "completed" | "incomplete";
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  filter,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const filteredTasks = tasks.filter((task) =>
    filter === "all"
      ? true
      : filter === "completed"
      ? task.isCompleted
      : !task.isCompleted
  );

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
