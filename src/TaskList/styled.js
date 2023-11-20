import { styled } from "styled-components";

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  margin-left: 1rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  &:has(input:checked) label {
    color: hsl(200, 20%, 40%);
  }

  & label {
    display: flex;
    gap: 0.25rem;
    cursor: pointer;
    align-items: center;
  }

  & input {
    outline: none;
    width: 0;
    height: 0;
    appearance: none;
    pointer-events: none;
    position: absolute;
  }

  & label::before {
    content: "";
    display: block;
    width: 0.9rem;
    height: 0.9rem;
    background: hsl(200, 100%, 90%);
    border-radius: 0.25em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & li label:hover::before {
    background: hsl(200, 100%, 80%);
  }

  &:has(input:checked) label::before {
    content: "✔";
    background: hsl(200, 100%, 40%);
    color: hsl(200, 100%, 90%);
    font-size: 0.75rem;
    font-weight: bold;
  }

  &:has(input:checked) label:hover::before {
    background: hsl(200, 100%, 30%);
  }
`;

export const RemoveButton = styled.button`
  background: hsl(0, 100%, 40%, 0.1);
  border: 1px solid hsl(0, 100%, 40%);
  color: hsl(0, 100%, 40%);

  &:hover,
  &:focus-visible {
    background: hsl(0, 100%, 40%, 0.2);
  }
`;
