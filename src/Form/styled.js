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
`;

export const Button = styled.button`
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
