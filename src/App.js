import { Container } from "./Container";
import { NewTaskForm } from "./Form";
import { TaskList } from "./TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

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
