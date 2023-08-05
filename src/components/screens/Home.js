import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <>
        <MainContainer>
            <Head>Home page</Head>
            <Description>Coming soon...</Description>
        </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  padding: 100px 0px 0px 100px;
`;
const Head = styled.h2``;
const Description = styled.p``;
export default Home;
