import React from "react";
import Header from "../includes/Header";
import styled from "styled-components";

function Schedular() {
  return (
    <>
       <Container>
            <Header />
            <LessonContainer>
                <Heading>New Lessons Board</Heading>
                <SubjectContainer>
                    <SubjectListItem>
                        <SubjectImageContainer>
                            <SubjectImage src={require("../../assets/images/Chemistry.jpg")} alt="Chemistry" />
                        </SubjectImageContainer>
                        <ContentContainer>
                            <SubjectTitle>Basic Chemistry III</SubjectTitle>
                            <SubjectDescription>This part of chemistry deals with atomic structure and molecular structure.</SubjectDescription>
                            <ProfileMainContainer>
                                <ProfileImageContainer>
                                    <Profile src={require("../../assets/images/Women1.png")} alt="Women 1" />
                                </ProfileImageContainer>
                                <ProfileSubContainer>
                                    <PersonName>By Prof Kenni</PersonName>
                                    <PersonDetails>8:30, 13th March 2020</PersonDetails>
                                </ProfileSubContainer>
                            </ProfileMainContainer>
                        </ContentContainer>
                    </SubjectListItem>
                    <SubjectListItem>
                        <SubjectImageContainer>
                            <SubjectImage src={require("../../assets/images/Physics.jpg")} alt="Physics" />
                        </SubjectImageContainer>
                        <ContentContainer>
                            <SubjectTitle>Mechanics in Physics</SubjectTitle>
                            <SubjectDescription>This part of chemistry deals with atomic structure and molecular structure.</SubjectDescription>
                            <ProfileMainContainer>
                                <ProfileImageContainer>
                                    <Profile src={require("../../assets/images/Women2.png")} alt="Women 1" />
                                </ProfileImageContainer>
                                <ProfileSubContainer>
                                    <PersonName>By Prof Kenni</PersonName>
                                    <PersonDetails>8:30, 13th March 2020</PersonDetails>
                                </ProfileSubContainer>
                            </ProfileMainContainer>
                        </ContentContainer>
                    </SubjectListItem>
                    <SubjectListItem>
                        <SubjectImageContainer>
                            <SubjectImage src={require("../../assets/images/Focus.jpg")} alt="Focus" />
                        </SubjectImageContainer>
                        <ContentContainer>
                            <SubjectTitle>Focus on Words</SubjectTitle>
                            <SubjectDescription>This part of chemistry deals with atomic structure and molecular structure.</SubjectDescription>
                            <ProfileMainContainer>
                                <ProfileImageContainer>
                                    <Profile src={require("../../assets/images/Man.png")} alt="Man" />
                                </ProfileImageContainer>
                                <ProfileSubContainer>
                                    <PersonName>By Prof Steven Joe</PersonName>
                                    <PersonDetails>3 days ago</PersonDetails>
                                </ProfileSubContainer>
                            </ProfileMainContainer>
                        </ContentContainer>
                    </SubjectListItem>
                </SubjectContainer>
            </LessonContainer>
       </Container>
      
    </>
  );
}
const Container = styled.div`
    width: 85%;
    background-color: gray;
`;
const LessonContainer = styled.div`
    padding-left: 60px;
    padding-right: 36px;
    padding-top: 36px;
   
`;
const Heading = styled.h2`
    margin-bottom: 26px;
    font-size: 19px;
    font-family: Poppins-Bold;
`;
const SubjectContainer = styled.ul`
    display: flex;
`;
const SubjectListItem = styled.li`
    margin-right: 32px;
    background-color: white;
    &:last-child {
        margin-right: 0;
    }
    
`;
const SubjectImageContainer = styled.div``;
const SubjectImage = styled.img`
    display: block;
    width: 100%;
    height: 170px;
`;
const ContentContainer = styled.div`
    padding: 20px 60px 22px 14px;
`;
const SubjectTitle = styled.h5`
    font-family: 'Poppins-Bold';
    font-size: 15px;
    margin-bottom: 6px;
`;
const SubjectDescription = styled.p`
    font-size: 11px;
    margin-bottom: 14px;
`;
const ProfileMainContainer = styled.div`
    display: flex;
`;
const ProfileImageContainer = styled.div`
    width: 30px;
    display: flex;
    align-items: center;
    margin-right: 8px;
`;
const ProfileSubContainer = styled.div``;
const Profile = styled.img`
    display: block;
    width: 100%;
`;
const PersonName = styled.span`
    font-size: 12px;
    font-family: 'Poppins-Bold';
`;
const PersonDetails = styled.p`
    font-size: 10px;
`;
export default Schedular;
