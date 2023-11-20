import { useState, useRef } from "react";
import { StyledForm, Row, StyledButton } from "./styled";

export const NewTaskForm = ({ setTasks }) => {
  const [newItem, setNewItem] = useState("");
  const inputRef = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem === "") return;

    addTask();

    setNewItem("");
    inputRef.current.focus();
  };

  const addTask = () => {
    setTasks((currentTasks) => {
      return [
        ...currentTasks,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  };

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
            ref={inputRef}
          ></input>
        </Row>
        <StyledButton>Dodaj</StyledButton>
      </StyledForm>
    </>
  );
};
