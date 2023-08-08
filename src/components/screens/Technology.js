import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

function Technology() {
  return (
    <>
        <Helmet>
            <title>Technology page</title>
        </Helmet>
        <MainContainer>
            <Head>Technology page</Head>
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
export default Technology;
