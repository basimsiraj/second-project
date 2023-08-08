import React from "react";
import styled from "styled-components";

function Header() {
    return (
        <>
            <MainContainer>
                <IconContainer>
                    <ListItem>
                        <Icon
                            src={
                                require("../../assets/images/Bell.png")
                            }
                            alt="Bell"
                        />
                    </ListItem>
                    <ListItem>
                        <Icon
                            src={require("../../assets/images/Settings.png")}
                            alt="Settings"
                        />
                    </ListItem>
                    <ListItem>
                        <Icon
                            src={require("../../assets/images/Women1.png")}
                            alt="Women 1"
                        />
                    </ListItem>
                </IconContainer>
            </MainContainer>
        </>
    );
}
const MainContainer = styled.header`
    padding: 42px 31px 0px 0px;
    width: 100%;
    @media all and (max-width: 1280px) {
        padding: 42px 45px 0px 0px;
    }
    @media all and (max-width: 1080px) {
        padding: 42px 60px 0px 0px;
    }
    @media all and (max-width: 980px) {
        padding: 42px 49px 0px 0px;
    }
    @media all and (max-width: 768px) {
        padding: 42px 43px 0px 0px;
    }
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
        width: 24px;
        margin-right: 4px;
    }
    &:nth-child(2n) {
        width: 24px;
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
