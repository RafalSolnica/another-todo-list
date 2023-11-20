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
