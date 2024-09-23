import styled from "styled-components";

const Containers = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: grid;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, 225px);
  justify-content: center;
  justify-items: center;
  margin: 0 auto;
  column-gap: 30px;
`;

export const Main = ({ children }) => {
  return (
    <Containers>
      <MainContainer>{children}</MainContainer>
    </Containers>
  );
};
