import { styled } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  & input {
    outline: none;
    border: 1px solid hsl(200, 100%, 40%);
    background: hsl(200, 100%, 30%);
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
    color: hsl(200, 100%, 90%);
  }

  & input:focus {
    border: 1px solid hsl(200, 100%, 70%);
  }
`;

export const StyledButton = styled.button`
  background: hsl(200, 100%, 50%, 0.1);
  border: 1px solid hsl(200, 100%, 50%);
  color: hsl(200, 100%, 50%);
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus-visible {
    background: hsl(200, 100%, 50%, 0.2);
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

export const Header = styled.h1`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

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
