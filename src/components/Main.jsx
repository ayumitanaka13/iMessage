import React from "react";
import styled from "styled-components";

import SideBar from "./SideBar";
import Chat from "./Chat";

const MainContainer = styled.div`
  display: flex;
`;

const Main = () => {
  return (
    <MainContainer>
      <SideBar />
      <Chat />
    </MainContainer>
  );
};

export default Main;
