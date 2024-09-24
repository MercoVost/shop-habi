import styled from "styled-components";

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  min-height: 200px;
`;

const CardImage = styled.img`
  width: 185px;
  height: 150px;
  border-radius: 15px;
`;

const CardName = styled.p`
  margin: 5px 0;
`;

const CardPrace = styled.p`
  margin: 5px 0;
`;

const CardButton = styled.button`
  width: 100%;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;

  &.clicked {
  }

  &:disabled {
    background-color: #ccc;
  }
`;

export const Card = ({
  img,
  name,
  prace,
  buttonCard,
  nameButton,
  isClick,
  isAdded,
}) => {
  return (
    <Container>
      <CardImage src={img} alt={name} />
      <CardName>{name}</CardName>
      <CardPrace>{prace} рублей</CardPrace>
      <CardButton
        className={isClick ? "clicked" : ""}
        onClick={buttonCard}
        disabled={isAdded}
      >
        {nameButton}
      </CardButton>
    </Container>
  );
};
