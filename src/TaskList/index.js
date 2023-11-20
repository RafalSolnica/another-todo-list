import { StyledList } from "./styled";
import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks, setTasks }) => {
  return (
    <StyledList>
      {tasks.length === 0 && "Brak zadań"}
      {tasks.map((task) => {
        return (
          <TaskItem key={task.id} task={task} setTasks={setTasks}></TaskItem>
        );
      })}
    </StyledList>
  );
};
