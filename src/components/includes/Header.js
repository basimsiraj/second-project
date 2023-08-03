import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <>
        <MainContainer>
            <IconContainer>
                <ListItem>
                        <Icon src={require("../../assets/images/Bell.svg").default} alt="Bell" />
                </ListItem>
                <ListItem>
                        <Icon src={require("../../assets/images/Settings.png")} alt="Settings" />
                </ListItem>
                <ListItem>
                        <Icon src={require("../../assets/images/Women1.png")} alt="Women 1" />
                </ListItem>
            </IconContainer>
        </MainContainer>
    </>
  );
}
const MainContainer = styled.header`
    padding: 20px 36px 0px 0px;
    width: 100%;
`;
const IconContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: right;
    list-style: none;
`;
const ListItem = styled.li`
    margin-right: 10px;
    &:first-child {
        width: 16px;
    }
    &:nth-child(2n) {
        width: 22px;
    }
    &:last-child {
        margin-right: 0;
        width: 34px;
        border: 2px solid orange;
        border-radius: 50%;
    }
`;
const Icon = styled.img`
    display: block;
    width: 100%;
`;
export default Header;
