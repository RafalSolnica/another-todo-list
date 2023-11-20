import { StyledList, ListItem, RemoveButton } from "./styled";

export const TaskList = ({ tasks, setTasks }) => {
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
    <StyledList>
      {tasks.length === 0 && "Brak zadań"}
      {tasks.map((task) => {
        return (
          <ListItem key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={(e) => toggletask(task.id, e.target.checked)}
              />
              {task.title}
              <RemoveButton onClick={() => deleteTask(task.id)}>
                Delete
              </RemoveButton>
            </label>
          </ListItem>
        );
      })}
    </StyledList>
  );
};
