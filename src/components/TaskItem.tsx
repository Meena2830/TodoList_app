import React from "react";
import { Task } from "../interfaces/Task";
import "../styles/TaskItem.css";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const handleEdit = () => {
    const newTitle = prompt("Edit Task:", task.title);
    if (newTitle && newTitle.trim()) {
      onEdit(task.id, newTitle);
    }
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggle(task.id)}
      />
      <span className={task.isCompleted ? "completed" : ""}>{task.title}</span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
