import { Container } from "./Container";
import { NewTaskForm } from "./Form";
import { TaskList } from "./TaskList";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [tasks, setTasks] = useLocalStorage("TASKS", []);

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
