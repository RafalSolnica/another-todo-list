import { useState } from "react";
import {
  StyledForm,
  Row,
  StyledButton,
  RemoveButton,
  StyledList,
  ListItem,
  Header,
} from "./styled";

export const Form = () => {
  const [newItem, setNewItem] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks((currentTasks) => {
      return [
        ...currentTasks,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  };

  console.log(tasks);

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <Row>
          <label htmlFor="item">Nowe zadanie</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          ></input>
        </Row>
        <StyledButton>Dodaj</StyledButton>
      </StyledForm>
      <Header>Lista zadań</Header>
      <StyledList></StyledList>
    </>
  );
};
