import { StyledItem, RemoveButton } from "./styled";

export const TaskItem = ({ task, setTasks }) => {
  const toggletask = (id, completed) => {
    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed };
        }

        return task;
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <StyledItem key={task.id}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => toggletask(task.id, e.target.checked)}
        />
        {task.title}
        <RemoveButton onClick={() => deleteTask(task.id)}>Usuń</RemoveButton>
      </label>
    </StyledItem>
  );
};
