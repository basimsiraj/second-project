import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Sidebar from "../screens/Sidebar";

function SideNavBar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleToggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) {
                setShowSidebar(true);
            } else {
                setShowSidebar(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); 

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <Wrapper>
            {showSidebar &&<Container>
                <Sidebar />
                </Container>}
                <SideNavMainContainer>
                    <SideNavTopContainer>
                        <LogoContainer>
                            <Logo
                                src={require("../../assets/images/Logo.png")}
                                alt="Logo"
                            />
                        </LogoContainer>
                    </SideNavTopContainer>
                    <SideNav>
                        <SideNavSubContaineer>
                            <NavLink to="/">
                                <SidNavListItem>
                                    <LogoImageContainer>
                                        <LogoImage
                                            src={
                                                require("../../assets/images/Home.svg")
                                                    .default
                                            }
                                            alt="Home"
                                        />
                                    </LogoImageContainer>
                                    <NavItemName>Home</NavItemName>
                                </SidNavListItem>
                            </NavLink>
                            <NavLink to="/schedular">
                                <SidNavListItem>
                                    <LogoImageContainer>
                                        <LogoImage
                                            src={
                                                require("../../assets/images/Schedular.svg")
                                                    .default
                                            }
                                            alt="Schedular"
                                        />
                                    </LogoImageContainer>
                                    <NavItemName>Schedular</NavItemName>
                                </SidNavListItem>
                            </NavLink>
                            <NavLink to="/technology">
                                <SidNavListItem>
                                    <LogoImageContainer>
                                        <LogoImage
                                            src={
                                                require("../../assets/images/Technology.svg")
                                                    .default
                                            }
                                            alt="Technology"
                                        />
                                    </LogoImageContainer>
                                    <NavItemName>Technology</NavItemName>
                                </SidNavListItem>
                            </NavLink>
                            <NavLink to="/rewards">
                                <SidNavListItem>
                                    <LogoImageContainer>
                                        <LogoImage
                                            src={
                                                require("../../assets/images/Home.svg")
                                                    .default
                                            }
                                            alt="Home"
                                        />
                                    </LogoImageContainer>
                                    <NavItemName>Rewards</NavItemName>
                                </SidNavListItem>
                            </NavLink>
                            <NavLink to="/notes">
                                <SidNavListItem>
                                    <LogoImageContainer>
                                        <LogoImage
                                            src={
                                                require("../../assets/images/Notes.svg")
                                                    .default
                                            }
                                            alt="Notes"
                                        />
                                    </LogoImageContainer>
                                    <NavItemName>Notes</NavItemName>
                                </SidNavListItem>
                            </NavLink>
                            <NavLink to="/submission">
                                <SidNavListItem>
                                    <LogoImageContainer>
                                        <LogoImage
                                            src={
                                                require("../../assets/images/Submission.svg")
                                                    .default
                                            }
                                            alt="Submission"
                                        />
                                    </LogoImageContainer>
                                    <NavItemName>Submission</NavItemName>
                                </SidNavListItem>
                            </NavLink>
                        </SideNavSubContaineer>
                    </SideNav>
                    <SideNavBottomMainContainer>
                        <SideNavBottomSubContainer>
                            <BookImageContainer>
                                <BookImage
                                    src={require("../../assets/images/Book.jpg")}
                                    alt="Book"
                                />
                            </BookImageContainer>
                            <Button>Buy premium</Button>
                            <LearnLink>Learn more</LearnLink>
                        </SideNavBottomSubContainer>
                    </SideNavBottomMainContainer>
                </SideNavMainContainer>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.div`
    width: 19%;
    /* @media all and (max-width: 1080px) {
        width: 19%;
    }
    @media all and (max-width: 640px) {
        width: 30%;
    } */
    @media all and (max-width: 768px) {
        width: 32%;
    }
    @media all and (max-width: 640px) {
        width: 5%;
    }
`;
const Container =styled.div`
    display: hidden;
    @media all and (max-width: 640px) {
        display:block;
    }
`;
const SideNavMainContainer = styled.div`
    background-color: #fff;
    /* width: 224px; */
    /* padding-bottom: 60px; */
    /* border: 1ps solid #dadada; */
    /* box-shadow: 5px 10px  20px 10px red; */
`;
const SideNavTopContainer = styled.div`
    padding: 30px 0px 0px 90px;
    @media all and (max-width: 1080px) {
        padding: 30px 0px 0px 75px;
    }
    @media all and (max-width: 980px) {
        padding: 30px 0px 0px 47px;
    }
`;
const LogoContainer = styled.div`
    width: 53px;
`;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
const SideNav = styled.div`
    padding: 86px 0px 70px 60px;
    @media all and (max-width: 1080px) {
        padding: 86px 0px 70px 50px;
    }
    @media all and (max-width: 980px) {
        padding: 86px 0px 394px 22px;
    }
    @media all and (max-width: 768px) {
        padding: 86px 0px 399px 22px;
    }
    @media all and (max-width: 640px) {
        padding: 86px 0px 617px 22px;
    }
`;
const SideNavSubContaineer = styled.ul``;
const SidNavListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 52px;
`;
const LogoImageContainer = styled.div`
    width: 20px;
    margin-right: 24px;
    @media all and (max-width: 1280px) {
        margin-right: 15px;
    }
`;
const LogoImage = styled.img`
    display: block;
    width: 100%;
`;
const NavItemName = styled.span`
    font-size: 13px;
    color: gray;
    font-family: "Poppins-Medium";
`;
const SideNavBottomMainContainer = styled.div`
    border: 1px solid #e1e2e4;
    margin-left: 38px;
    margin-right: 5px;
    @media all and (max-width: 1280px) {
        margin-left: 4px;
    }
    @media all and (max-width: 640px) {
        display: none;
    }
`;
const SideNavBottomSubContainer = styled.div`
    padding: 0px 24px 10px 30px;
    @media all and (max-width: 1080px) {
        padding: 0px 19px 7px 19px;
    }
    @media all and (max-width: 768px) {
        padding: 0px 22px 7px 22px;
    }
    @media all and (max-width: 640px) {
        padding: 0px 18px 7px 18px;
    }
`;
const BookImageContainer = styled.div`
    width: 115px;
    margin-bottom: 7px;
    @media all and (max-width: 980px) {
        width: 100px;
    }
    @media all and (max-width: 768px) {
        width: 93px;
    }
`;
const BookImage = styled.img`
    display: block;
    width: 100%;
`;
const Button = styled.button`
    padding: 8px 13px 8px 13px;
    background-color: #5d75fb;
    color: #fff;
    font-family: "Poppins-Regular";
    border-radius: 3px;
    margin-bottom: 10px;
    font-size: 13px;
    @media all and (max-width: 980px) {
        padding: 6px 5px 6px 5px;
    }
    @media all and (max-width: 768px) {
        padding: 4px 5px 4px 5px;
    }
    @media all and (max-width: 640px) {
        padding: 4px 5px 4px 5px;
    }
`;
const LearnLink = styled.a`
    display: block;
    color: #5d75fb;
    text-align: center;
    font-size: 12px;
`;
export default SideNavBar;
