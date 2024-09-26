import styled from "styled-components";

const Contauner = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonPlus = styled.button`
  border-radius: 50%;
  height: 20px;
  margin: 0 5px;
  padding: 0 4px;
  width: 4, 4px;
`;

const ButtonMinus = styled.button`
  border-radius: 50%;
  height: 20px;
  margin: 0 5px;
  padding: 0 4px;
  width: 20px;
`;

const ValueQuantity = styled.p``;

export const ButtonCoints = ({ productQuantities, clickPlus, clickMinus }) => {
  return (
    <>
      <Contauner>
        <ButtonPlus onClick={clickPlus}>+</ButtonPlus>

        <ValueQuantity>{productQuantities}</ValueQuantity>

        <ButtonMinus onClick={clickMinus}>-</ButtonMinus>
      </Contauner>
    </>
  );
};
