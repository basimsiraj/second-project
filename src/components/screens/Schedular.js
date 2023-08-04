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
                <AssignmentContainer>
                    <Title>Assignment Manager</Title>
                    <AssignmentStatus>
                        <StatusList>Pending</StatusList>
                        <StatusList>Completed</StatusList>
                        <StatusList>Submitted</StatusList>
                    </AssignmentStatus>
                    <AssignmentStatusSubContainer>
                        <AssignmentStatusInnerContainer>
                            <AssignmentDetails>
                                <AssignmentDetailsList>
                                    <DetailsLeft>
                                        <SubjectName>Basic Physics II</SubjectName>
                                        <ProgressBar>
                                            <ProgressBarSubContainer>
                                                <ProgressBarInnerContainer></ProgressBarInnerContainer>
                                            </ProgressBarSubContainer>
                                        </ProgressBar>
                                    <SubjectDetails>Final assessment | Due 14th March 2020</SubjectDetails>
                                    </DetailsLeft>
                                    <DetailsRight>
                                        <ResumeButton>Resume</ResumeButton>
                                    </DetailsRight>
                                </AssignmentDetailsList>
                                <AssignmentDetailsList>
                                    <DetailsLeft>
                                        <SubjectName>Mental Math I</SubjectName>
                                        <SubjectDetails>Class test | Due tomorrow</SubjectDetails>
                                    </DetailsLeft>
                                    <DetailsRight>
                                        <StartButton>Start</StartButton>
                                    </DetailsRight>
                                </AssignmentDetailsList>
                            </AssignmentDetails>    
                        </AssignmentStatusInnerContainer> 
                    </AssignmentStatusSubContainer>
                </AssignmentContainer>
                <LiveContainer>
                    <RightTitle>Live Session</RightTitle>
                    <LiveSectionSubContainer>
                        <TopContainer>
                            <Lecture>Ongoing Lecture</Lecture>
                        </TopContainer>
                        <HorizontalLine />
                        <MiddleContainer>
                            <MiddleLeftContainer>
                                <RevisionDetails>Force and momentum revision</RevisionDetails>
                                <ProfessorName>Physics Prof Lee Dan Qi</ProfessorName>
                            </MiddleLeftContainer>
                            <MiddleRightContainer>
                                <PlayInnerContainer>
                                    <PlayImageContaineer>
                                        <PlayImage src={require("../../assets/images/Play.svg").default} alt="Play" />
                                    </PlayImageContaineer>
                                </PlayInnerContainer>
                                <PlayButton>
                                    <Span>join</Span>
                                </PlayButton>
                            </MiddleRightContainer>
                        </MiddleContainer>
                        <HorizontalLine />
                        <LiveBottomContainer>
                            <TopicDetails>
                                <TopicListItem>
                                    <ListItemContainer>
                                        <TickImageContainer>
                                            <TickImage src={require("../../assets/images/GreeenTick.svg").default} alt="Green Tick" />
                                        </TickImageContainer>
                                        <TopicNameContainer>
                                            <TopicName>Force and unit</TopicName>
                                        </TopicNameContainer>
                                        <TimeContainer>
                                            <Time>03:40min</Time>
                                        </TimeContainer>
                                        <ButtonContainer>
                                            <MediumButton>Medium</MediumButton>
                                        </ButtonContainer>
                                    </ListItemContainer>
                                </TopicListItem>
                                <TopicListItem>
                                    <ListItemContainer>
                                        <TickImageContainer>
                                            <TickImage src={require("../../assets/images/GrayTick.svg").default} alt="Gray Tick" />
                                        </TickImageContainer>
                                        <TopicNameContainer>
                                            <TopicName>Mass and acceleration</TopicName>
                                        </TopicNameContainer>
                                        <TimeContainer>
                                            <Time>06:08min</Time>
                                        </TimeContainer>
                                        <ButtonContainer>
                                            <HardButton>Hard</HardButton>
                                        </ButtonContainer>
                                    </ListItemContainer>
                                </TopicListItem>
                                <TopicListItem>
                                    <ListItemContainer>
                                        <TickImageContainer>
                                            <TickImage src={require("../../assets/images/GrayTick.svg").default} alt="Gray Tick" />
                                        </TickImageContainer>
                                        <TopicNameContainer>
                                            <TopicName>Gain of Momentum</TopicName>
                                        </TopicNameContainer>
                                        <TimeContainer>
                                            <Time>09:30min</Time>
                                        </TimeContainer>
                                        <ButtonContainer>
                                            <MediumButton>Medium</MediumButton>
                                        </ButtonContainer>
                                    </ListItemContainer>
                                </TopicListItem>
                            </TopicDetails>
                        </LiveBottomContainer>
                    </LiveSectionSubContainer>
                </LiveContainer>
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
    display: flex;
    padding: 20px 40px 30px 56px;
`;
const AssignmentContainer = styled.div`
    width: 45%;
    margin-right: 34px; 
`;
const Title = styled.h6`
    font-size: 17px;
    font-family: Poppins-Bold;
    margin-bottom: 18px;
`;
const AssignmentStatus = styled.ul`
    display: flex;
`;
const StatusList = styled.li`
    margin-right: 32px;
    font-family: Poppins-Bold;
    font-size: 13px;
    &:last-child {
        margin-right: 0px;
    }
`;
const AssignmentStatusSubContainer = styled.div`
    margin-top: 40px;
    background-color: white;
`;
const AssignmentStatusInnerContainer = styled.div`
    padding-top: 63px;
    padding-left: 20px;
    padding-bottom: 30px;
`;
const AssignmentDetails = styled.ul``;
const AssignmentDetailsList = styled.li`
    display: flex;
    margin-bottom: 14px;
    &:last-child {
        margin-bottom: 0px;
    }
    
`;
const DetailsLeft = styled.div`
    width: 90%;
    
`;
const DetailsRight = styled.div`
    width: 25%;
`;
const SubjectName = styled.h5`
    font-family: Poppins-Bold;
    margin-bottom: 10px;
    font-size: 13px;
`;
const ProgressBar = styled.div``;
const ProgressBarSubContainer = styled.div`
    width: 30%;
    background-color: gray;
`;
const ProgressBarInnerContainer = styled.div`
    width: 70%;
`;
const SubjectDetails = styled.p`
    font-size: 11px;
    color: gray;
`;
const ResumeButton = styled.button`
    border: 1px solid yellow;
    padding: 6px 12px 6px 12px;
    font-family: 'Poppins-Medium';
    border-radius: 3px;
    color: yellow;
    font-size: 12px;
`;
const StartButton = styled.button`
    border: 1px solid blue;
    padding: 5px 22px 5px 22px;
    font-family: 'Poppins-Medium';
    border-radius: 3px;
    color: blue;
    font-size: 12px;
`;
const LiveContainer = styled.div`
    width: 42%;
`;
const RightTitle = styled.h6`
    font-family: 'Poppins-Bold';
    font-size: 17px;
    margin-bottom: 14px;
`;
const LiveSectionSubContainer = styled.div`
    background-color: white;
    border: 1px solid orange;
`;
const TopContainer = styled.div`
    padding: 10px 20px 10px 30px;
    border-bottom: 1px solid gray;
`;
const Lecture = styled.span`
    font-size: 13px;
    font-family: 'Poppins-Medium';
`;
const HorizontalLine = styled.hr`
    width: 70%;
    color: gray;
`;
const MiddleContainer = styled.div`
    display: flex;
    padding: 20px 27px 20px 30px;
    border-bottom: 1px solid gray;
`;
const MiddleLeftContainer = styled.div`
    width: 76%;
`;
const RevisionDetails = styled.p`
    font-size: 12px;
    font-family: 'Poppins-Medium';
`;
const ProfessorName = styled.p`
    font-size: 12px;
    font-family: 'Poppins-Medium';
    margin-left: 5px;
`;
const MiddleRightContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: blue;
    border-radius: 5px;
    height: 31px;
    width: 100px;
`;
const PlayInnerContainer = styled.div`
    width: 30%;
   
`;
const PlayImageContaineer = styled.div` 
    width: 22px;
    margin-left: 3px;

`;
const PlayButton = styled.div`
    width: 70%;
    height: 31px;
    background-color: grey;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
   
`;
const Span = styled.span`
    margin-top: 6px;
    display: block;
    font-size: 14px;
    color: white;
    margin-left: 22px;   
`;

const PlayImage = styled.img`
    width: 100%;
    display: block;

`;
const LiveBottomContainer = styled.div`
    padding: 17px 40px 0px 30px;
    
`;
const TopicDetails = styled.ul``;
const TopicListItem = styled.li`
    margin-bottom: 11px;
    &:last-child {
        margin-bottom: 20px;
    }
`;
const ListItemContainer = styled.div`
    display: flex;
    align-items: center;
`;
const TickImageContainer = styled.div`
    width: 20px;
    margin-right: 20px;
`;
const TopicNameContainer = styled.div`
    width: 45%;
`;
const TimeContainer = styled.div`
    width: 29%;
`;
const ButtonContainer = styled.div`
    width: 10%;
`;
const TickImage = styled.img`
    display: block;
    width: 100%;
`;
const TopicName = styled.span`
    font-size: 11px;
    font-family: 'Poppins-Medium';
    margin-right: 10px;
`;
const Time = styled.span`
    font-size: 11px;
    font-family: 'Poppins-Medium';
    margin-right: 10px;
`;
const MediumButton = styled.button`
     font-family: 'Poppins-Medium';
     padding: 2px 8px 2px 8px;
     background-color: blue;
     font-size: 10px;
     border-radius: 4px;
     color: white;
`;
const HardButton = styled.button`
    font-family: 'Poppins-Medium';
     padding: 2px 16px 2px 16px;
     background-color: gray;
     font-size: 10px;
     border-radius: 4px;
     color: white;
`;
export default Schedular;
