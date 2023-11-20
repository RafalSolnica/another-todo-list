import { StyledForm, Row, Button } from "./styled";

export const Form = () => {
  return (
    <StyledForm>
      <Row>
        <label htmlFor="item">Nowe zadanie</label>
        <input type="text" id="item"></input>
      </Row>
      <Button>Dodaj</Button>
    </StyledForm>
  );
};
