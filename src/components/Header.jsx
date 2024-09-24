import styled from "styled-components";
import { LogoCointButton } from "./LogoCointButton";

const Headers = styled.header``;

const Container = styled.div`
  background: blue;
  padding: 0 5%;
  width: auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  color: white;
  cursor: pointer;
`;

export const Header = ({ titleButton, buttonCoint, quantity }) => {
  return (
    <Headers>
      <Container>
        <Title onClick={titleButton}>YAHYA-SHOP</Title>
        <LogoCointButton button={buttonCoint} quantity={quantity} />
      </Container>
    </Headers>
  );
};
