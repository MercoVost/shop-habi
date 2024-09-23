import styled from "styled-components";
import { CiShoppingCart } from "react-icons/ci";

const LogoCoints = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
`;

const LogoQuantityCoint = styled.div`
  background: red;
  width: 15px;
  height: 15px;
  position: absolute;
  border-radius: 50%;
  right: -3px;
  top: 0px;
`;

const LogoQuantity = styled.p`
  margin: 0;
  color: white;
  font-size: 13px;
  text-align: center;
`;

export const LogoCointButton = ({ button, quantity }) => {
  return (
    <LogoCoints onClick={button}>
      <CiShoppingCart
        style={{
          color: "white",
          width: "40px",
          height: "auto",
          display: "block",
        }}
      />
      <LogoQuantityCoint>
        <LogoQuantity>{quantity}</LogoQuantity>
      </LogoQuantityCoint>
    </LogoCoints>
  );
};
