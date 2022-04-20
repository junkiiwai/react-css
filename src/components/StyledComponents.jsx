import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title>-Styled Components-</Title>
      <Button>ファイト！</Button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px blue;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.p`
  margin: 0;
  color: green;
`;
const Button = styled.button`
  background-color: lightgray;
  border: none;
  padding: 10px;
`;
