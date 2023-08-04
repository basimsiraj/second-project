import React from "react";
import Header from "../includes/Header";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Schedular() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
    };
  return (
    <>
       <Container>
            <Header />
            <LessonContainer>
                <Heading>New Lessons Board</Heading>
              
                <StyledSliderWrapper>
                <StyledSlider {...settings}>
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
                    </StyledSlider>
                    </StyledSliderWrapper>
            </LessonContainer>
            <BottomContainer>
                <LeftContainer>
                    <Title>Assignment Manager</Title>
                    <AssignmentStatus>
                        <StatusList>Pending</StatusList>
                        <StatusList>Completed</StatusList>
                        <StatusList>Submitted</StatusList>
                    </AssignmentStatus>
                    <AssignmentStatusSubContainer>
                        <AssignmentDetails>
                            <AssignmentDetailsList>
                                <SubjectName>Basic Physics III<ProgressBar></ProgressBar>
                                </SubjectName>
                                <SubjectDetails>Final assessment | Due 14th March 2020</SubjectDetails>
                                <ButtonContainer>
                                    <Button>Resume</Button>
                                </ButtonContainer>
                            </AssignmentDetailsList>
                            <AssignmentDetailsList>
                                <SubjectName>Mental Math I<ProgressBar></ProgressBar>
                                </SubjectName>
                                <SubjectDetails>Class test | Due tomorrow</SubjectDetails>
                                <ButtonContainer>
                                    <Button>Start</Button>
                                </ButtonContainer>
                            </AssignmentDetailsList>
                        </AssignmentDetails>     
                    </AssignmentStatusSubContainer>
                </LeftContainer>
                <RightContainer>

                </RightContainer>
            </BottomContainer>
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
  position: relative; 
`;

const Heading = styled.h2`
  margin-bottom: 26px;
  font-size: 19px;
  font-family: Poppins-Bold;
`;

const StyledSliderWrapper = styled.div`
  margin-left: -16px;
  margin-right: -16px;
  max-width: 900px; 
  margin: 0 auto; 
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    margin: 0 -16px; 
  }

  .slick-slide {
    padding: 0 8px; 
  }
`;

const SubjectListItem = styled.div`
  flex: 0 0 calc(33.33% - 16px);
  margin: 0 8px; 
  background-color: white;
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
const BottomContainer = styled.div`
    padding-top: 30px;
    padding-left: 60px;
    padding-bottom: 40px;
    padding-right: 0px;
`;
const LeftContainer = styled.div`
    
`;
const Title = styled.h6`
    font-size: 17px;
    font-family: Poppins-Bold;
    margin-bottom: 14px;
`;
const AssignmentStatus = styled.ul`
    display: flex;
`;
const StatusList = styled.li`
    margin-right: 32px;
    font-family: Poppins-Bold;
    font-size: 13px;
`;
const AssignmentStatusSubContainer = styled.div`
    margin-top: 40px;
    background-color: white;
    width: 46%;
`;
const AssignmentDetails = styled.ul``;
const AssignmentDetailsList = styled.li``;
const SubjectName = styled.h5``;
const ProgressBar = styled.button``;
const SubjectDetails = styled.p``;
const ButtonContainer = styled.div``;
const Button = styled.button``;
const RightContainer = styled.div``;
export default Schedular;
