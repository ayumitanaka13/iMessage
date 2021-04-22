import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";

const MainContainer = styled.div`
  display: flex;
`;

const Main = () => {
  return (
    <MainContainer>
      <SideBar />
    </MainContainer>
  );
};

export default Main;
