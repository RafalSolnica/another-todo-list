import { Container } from "./Container";
import { NewTaskForm } from "./Form";
import { TaskList } from "./TaskList";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("TASKS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Container>
        <NewTaskForm setTasks={setTasks} />
        <h2>Lista zadań</h2>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </Container>
    </div>
  );
}

export default App;
