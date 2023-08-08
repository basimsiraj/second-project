import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Nav>
            <Hamburger onClick={toggleSidebar}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen} >
                <MenuLink to="/">Home</MenuLink>
                <MenuLink to="/schedular">Scheduler</MenuLink>
                <MenuLink to="/technology">Technology</MenuLink>
                <MenuLink to="/rewards">Rewards</MenuLink>
                <MenuLink to="/notes">Notes</MenuLink>
                <MenuLink to="/submission">Submission</MenuLink>
            </Menu>
        </Nav>
    );
};

export default Navbar;

const MenuLink = styled(NavLink)`
    padding: 20px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #9e9696;
    transition: all 0.3s ease-in;
    font-size: 14px;

    &:hover {
        color: #000;
    }
`;

const Nav = styled.div`
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    align-items: flex-start;
    @media all and (max-width: 640px) {
        padding-left: 15px;
    }
    @media all and (max-width: 480px) {
        padding-left: 9px;
    }
    @media all and (max-width: 360px) {
        padding-left: 6px;
    }
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    background-color: #fff;
    transition: width 0.3s ease-in;
    z-index: 50;
    overflow: hidden;
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: #000;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media all and (max-width: 640px) {
        display: flex;
        margin-top: 30px;
    }
`;
