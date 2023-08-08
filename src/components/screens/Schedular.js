import React, { useRef, useState } from "react";
import Header from "../includes/Header";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Schedular() {
    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };
    const [showPhysicsProgressBar, setShowPhysicsProgressBar] = useState(false);
    const [showMathsProgressBar, setShowMathsProgressBar] = useState(false);

    const handleResumeClick = () => {
        if (showMathsProgressBar) {
            setShowMathsProgressBar(false);
        }
    };

    const handleStartClick = () => {
        if (showPhysicsProgressBar) {
            setShowPhysicsProgressBar(false);
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };
    return (
        <>
            <Helmet>
                <title>Schedular page</title>
            </Helmet>
            <Container>
                <Header />
                <LessonContainer>
                    <LessonInnerContainer>
                        <HeaderContainer>
                            <Heading>New Lessons Board</Heading>
                        </HeaderContainer>
                        <SliderArrows>
                            <SliderLeftArrows onClick={previous}>
                                <ArrowLeftImageContainer>
                                    <LeftArrowImage
                                        src={require("../../assets/images/LeftArrow.png")}
                                        alt="Left Arrow"
                                    />
                                </ArrowLeftImageContainer>
                            </SliderLeftArrows>
                            <SliderRightArrows onClick={next}>
                                <ArrowRightImageContainer>
                                    <RightArrowImage
                                        src={require("../../assets/images/RightArrow.png")}
                                        alt="Right Arrow"
                                    />
                                </ArrowRightImageContainer>
                            </SliderRightArrows>
                        </SliderArrows>
                    </LessonInnerContainer>
                    <StyledSliderWrapper>
                        <StyledSlider ref={sliderRef} {...settings}>
                            <SubjectListItem>
                                <SubjectImageContainer>
                                    <SubjectImage
                                        src={require("../../assets/images/Chemistry.jpg")}
                                        alt="Chemistry"
                                    />
                                </SubjectImageContainer>
                                <ContentContainer>
                                    <SubjectTitle>
                                        Basic Chemistry III
                                    </SubjectTitle>
                                    <SubjectDescription>
                                        This part of chemistry deals with atomic
                                        structure and molecular structure.
                                    </SubjectDescription>
                                    <ProfileMainContainer>
                                        <ProfileImageContainer>
                                            <Profile
                                                src={require("../../assets/images/Women1.png")}
                                                alt="Women 1"
                                            />
                                        </ProfileImageContainer>
                                        <ProfileSubContainer>
                                            <PersonName>
                                                By Prof Kenni
                                            </PersonName>
                                            <PersonDetails>
                                                8:30, 13th March 2020
                                            </PersonDetails>
                                        </ProfileSubContainer>
                                    </ProfileMainContainer>
                                </ContentContainer>
                            </SubjectListItem>
                            <SubjectListItem>
                                <SubjectImageContainer>
                                    <SubjectImage
                                        src={require("../../assets/images/Physics.jpg")}
                                        alt="Physics"
                                    />
                                </SubjectImageContainer>
                                <ContentContainer>
                                    <SubjectTitle>
                                        Mechanics in Physics
                                    </SubjectTitle>
                                    <SubjectDescription>
                                        This part of chemistry deals with atomic
                                        structure and molecular structure.
                                    </SubjectDescription>
                                    <ProfileMainContainer>
                                        <ProfileImageContainer>
                                            <Profile
                                                src={require("../../assets/images/Women2.png")}
                                                alt="Women 1"
                                            />
                                        </ProfileImageContainer>
                                        <ProfileSubContainer>
                                            <PersonName>
                                                By Prof Kenni
                                            </PersonName>
                                            <PersonDetails>
                                                8:30, 13th March 2020
                                            </PersonDetails>
                                        </ProfileSubContainer>
                                    </ProfileMainContainer>
                                </ContentContainer>
                            </SubjectListItem>
                            <SubjectListItem>
                                <SubjectImageContainer>
                                    <SubjectImage
                                        src={require("../../assets/images/Focus.jpg")}
                                        alt="Focus"
                                    />
                                </SubjectImageContainer>
                                <ContentContainer>
                                    <SubjectTitle>Focus on Words</SubjectTitle>
                                    <SubjectDescription>
                                        This part of chemistry deals with atomic
                                        structure and molecular structure.
                                    </SubjectDescription>
                                    <ProfileMainContainer>
                                        <ProfileImageContainer>
                                            <Profile
                                                src={require("../../assets/images/Man.png")}
                                                alt="Man"
                                            />
                                        </ProfileImageContainer>
                                        <ProfileSubContainer>
                                            <PersonName>
                                                By Prof Steven Joe
                                            </PersonName>
                                            <PersonDetails>
                                                3 days ago
                                            </PersonDetails>
                                        </ProfileSubContainer>
                                    </ProfileMainContainer>
                                </ContentContainer>
                            </SubjectListItem>
                            <SubjectListItem>
                                <SubjectImageContainer>
                                    <SubjectImage
                                        src={require("../../assets/images/Chemistry.jpg")}
                                        alt="Chemistry"
                                    />
                                </SubjectImageContainer>
                                <ContentContainer>
                                    <SubjectTitle>
                                        Basic Chemistry III
                                    </SubjectTitle>
                                    <SubjectDescription>
                                        This part of chemistry deals with atomic
                                        structure and molecular structure.
                                    </SubjectDescription>
                                    <ProfileMainContainer>
                                        <ProfileImageContainer>
                                            <Profile
                                                src={require("../../assets/images/Women1.png")}
                                                alt="Women 1"
                                            />
                                        </ProfileImageContainer>
                                        <ProfileSubContainer>
                                            <PersonName>
                                                By Prof Kenni
                                            </PersonName>
                                            <PersonDetails>
                                                8:30, 13th March 2020
                                            </PersonDetails>
                                        </ProfileSubContainer>
                                    </ProfileMainContainer>
                                </ContentContainer>
                            </SubjectListItem>
                            <SubjectListItem>
                                <SubjectImageContainer>
                                    <SubjectImage
                                        src={require("../../assets/images/Physics.jpg")}
                                        alt="Physics"
                                    />
                                </SubjectImageContainer>
                                <ContentContainer>
                                    <SubjectTitle>
                                        Mechanics in Physics
                                    </SubjectTitle>
                                    <SubjectDescription>
                                        This part of chemistry deals with atomic
                                        structure and molecular structure.
                                    </SubjectDescription>
                                    <ProfileMainContainer>
                                        <ProfileImageContainer>
                                            <Profile
                                                src={require("../../assets/images/Women2.png")}
                                                alt="Women 1"
                                            />
                                        </ProfileImageContainer>
                                        <ProfileSubContainer>
                                            <PersonName>
                                                By Prof Kenni
                                            </PersonName>
                                            <PersonDetails>
                                                8:30, 13th March 2020
                                            </PersonDetails>
                                        </ProfileSubContainer>
                                    </ProfileMainContainer>
                                </ContentContainer>
                            </SubjectListItem>
                            <SubjectListItem>
                                <SubjectImageContainer>
                                    <SubjectImage
                                        src={require("../../assets/images/Focus.jpg")}
                                        alt="Focus"
                                    />
                                </SubjectImageContainer>
                                <ContentContainer>
                                    <SubjectTitle>Focus on Words</SubjectTitle>
                                    <SubjectDescription>
                                        This part of chemistry deals with atomic
                                        structure and molecular structure.
                                    </SubjectDescription>
                                    <ProfileMainContainer>
                                        <ProfileImageContainer>
                                            <Profile
                                                src={require("../../assets/images/Man.png")}
                                                alt="Man"
                                            />
                                        </ProfileImageContainer>
                                        <ProfileSubContainer>
                                            <PersonName>
                                                By Prof Steven Joe
                                            </PersonName>
                                            <PersonDetails>
                                                3 days ago
                                            </PersonDetails>
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
                                            <SubjectContainer>
                                                <SubjectName>
                                                    Basic Physics II
                                                </SubjectName>
                                                <ProgressBar
                                                    visible={
                                                        showPhysicsProgressBar
                                                    }
                                                >
                                                    <ProgressBarSubContainer>
                                                        <ProgressBarInnerContainer></ProgressBarInnerContainer>
                                                    </ProgressBarSubContainer>
                                                </ProgressBar>
                                            </SubjectContainer>
                                            <SubjectDetails>
                                                Final assessment | Due 14th
                                                March 2020
                                            </SubjectDetails>
                                        </DetailsLeft>
                                        <DetailsRight>
                                            <ResumeButton
                                                onClick={() => {
                                                    setShowPhysicsProgressBar(
                                                        true
                                                    );
                                                    handleResumeClick();
                                                }}
                                            >
                                                Resume
                                            </ResumeButton>
                                        </DetailsRight>
                                    </AssignmentDetailsList>
                                    <AssignmentDetailsList>
                                        <DetailsLeft>
                                            <SubjectContainer>
                                                <SubjectName>
                                                    Mental Math I
                                                </SubjectName>
                                                <ProgressMathsBar
                                                    visible={
                                                        showMathsProgressBar
                                                    }
                                                >
                                                    <ProgressBarSubContainer>
                                                        <ProgressBarInnerContainer></ProgressBarInnerContainer>
                                                    </ProgressBarSubContainer>
                                                </ProgressMathsBar>
                                            </SubjectContainer>
                                            <SubjectDetails>
                                                Class test | Due tomorrow
                                            </SubjectDetails>
                                        </DetailsLeft>
                                        <DetailsRight>
                                            <StartButton
                                                onClick={() => {
                                                    setShowMathsProgressBar(
                                                        true
                                                    );
                                                    handleStartClick();
                                                }}
                                            >
                                                Start
                                            </StartButton>
                                        </DetailsRight>
                                    </AssignmentDetailsList>
                                </AssignmentDetails>
                            </AssignmentStatusInnerContainer>
                        </AssignmentStatusSubContainer>
                    </AssignmentContainer>
                    <LiveContainer>
                        <LiveHeadingContainer>
                            <RightTitle>Live Session</RightTitle>
                            <Circle></Circle>
                        </LiveHeadingContainer>
                        <LiveSectionSubContainer>
                            <TopContainer>
                                <Lecture>Ongoing Lecture</Lecture>
                            </TopContainer>
                            <HorizontalLine />
                            <MiddleContainer>
                                <MiddleLeftContainer>
                                    <RevisionDetails>
                                        Force and momentum revision
                                    </RevisionDetails>
                                    <ProfessorName>
                                        Physics Prof Lee Dan Qi
                                    </ProfessorName>
                                </MiddleLeftContainer>
                                <MiddleRightContainer>
                                    <PlayInnerContainer>
                                        <PlayImageContaineer>
                                            <PlayImage
                                                src={
                                                    require("../../assets/images/Play.svg")
                                                        .default
                                                }
                                                alt="Play"
                                            />
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
                                                <TickImage
                                                    src={
                                                        require("../../assets/images/GreeenTick.svg")
                                                            .default
                                                    }
                                                    alt="Green Tick"
                                                />
                                            </TickImageContainer>
                                            <TopicNameContainer>
                                                <TopicName>
                                                    Force and unit
                                                </TopicName>
                                            </TopicNameContainer>
                                            <TimeContainer>
                                                <Time>03:40min</Time>
                                            </TimeContainer>
                                            <ButtonContainer>
                                                <MediumButton>
                                                    Medium
                                                </MediumButton>
                                            </ButtonContainer>
                                        </ListItemContainer>
                                    </TopicListItem>
                                    <TopicListItem>
                                        <ListItemContainer>
                                            <TickImageContainer>
                                                <TickImage
                                                    src={
                                                        require("../../assets/images/GrayTick.svg")
                                                            .default
                                                    }
                                                    alt="Gray Tick"
                                                />
                                            </TickImageContainer>
                                            <TopicNameContainer>
                                                <TopicName>
                                                    Mass and acceleration
                                                </TopicName>
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
                                                <TickImage
                                                    src={
                                                        require("../../assets/images/GrayTick.svg")
                                                            .default
                                                    }
                                                    alt="Gray Tick"
                                                />
                                            </TickImageContainer>
                                            <TopicNameContainer>
                                                <TopicName>
                                                    Gain of Momentum
                                                </TopicName>
                                            </TopicNameContainer>
                                            <TimeContainer>
                                                <Time>09:30min</Time>
                                            </TimeContainer>
                                            <ButtonContainer>
                                                <MediumButton>
                                                    Medium
                                                </MediumButton>
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
    width: 84%;
    background-color: #f9fafc;
    @media all and (max-width: 980px) {
        width: 81%;
    }
    @media all and (max-width: 768px) {
        width: 76%;
    }
    @media all and (max-width: 640px) {
        width: 95%;
        background-color: #fff;
    }
`;

const LessonContainer = styled.div`
    padding: 36px 0px 0px 60px;
    @media all and (max-width: 1280px) {
        padding: 36px 20px 0px 60px;
    }
    @media all and (max-width: 1080px) {
        padding: 36px 39px 0px 45px;
    }
    @media all and (max-width: 640px) {
        padding: 36px 39px 0px 34px;
    }
`;
const LessonInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 97%;
    @media all and (max-width: 1280px) {
        width: 97%;
    }
    @media all and (max-width: 980px) {
        width: 98%;
    }
    @media all and (max-width: 768px) {
        width: 99%;
    }
`;
const HeaderContainer = styled.div`
    /* width: 40%; */
`;
const Heading = styled.h2`
    margin-bottom: 26px;
    font-size: 19px;
    font-family: Poppins-Bold;
    @media all and (max-width: 360px) {
        font-size: 17px;
    }
`;
const SliderArrows = styled.div`
    display: flex;
    /* width: 11%; */
`;
const SliderLeftArrows = styled.div`
    margin-right: 17px;
    @media all and (max-width: 360px) {
        margin-right: 5px;
    }
`;
const ArrowLeftImageContainer = styled.div`
    width: 24px;
`;
const LeftArrowImage = styled.img`
    display: block;
    width: 100%;
`;
const SliderRightArrows = styled.div``;
const ArrowRightImageContainer = styled.div`
    width: 24px;
`;
const RightArrowImage = styled.img`
    display: block;
    width: 100%;
`;
const StyledSliderWrapper = styled.div`
    width: 95%;
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
    @media all and (max-width: 980px) {
        padding: 20px 5px 22px 14px;
    }
    @media all and (max-width: 640px) {
        padding: 20px 11px 22px 11px;
    }
`;
const SubjectTitle = styled.h5`
    font-family: "Poppins-Bold";
    font-size: 15px;
    margin-bottom: 6px;
    @media all and (max-width: 1080px) {
        font-size: 14px;
    }
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
    font-family: "Poppins-Bold";
`;
const PersonDetails = styled.p`
    font-size: 10px;
`;
const BottomContainer = styled.div`
    display: flex;
    padding: 40px 0px 59px 63px;
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
    }
    @media all and (max-width: 768px) {
        padding: 40px 0px 59px 47px;
    }
    @media all and (max-width: 640px) {
        padding: 40px 0px 59px 34px;
    }
`;
const AssignmentContainer = styled.div`
    width: 45%;
    margin-right: 34px;
    @media all and (max-width: 1080px) {
        width: 42%;
    }
    @media all and (max-width: 980px) {
        width: 79%;
        margin-bottom: 30px;
    }
    @media all and (max-width: 768px) {
        width: 84%;
    }
`;
const Title = styled.h6`
    font-size: 19px;
    font-family: Poppins-Bold;
    margin-bottom: 18px;
    @media all and (max-width: 1080px) {
        font-size: 17px;
    }
`;
const AssignmentStatus = styled.ul`
    display: flex;
`;
const StatusList = styled.li`
    margin-right: 32px;
    font-family: Poppins-Bold;
    font-size: 13px;
    color: gray;
    &:last-child {
        margin-right: 0px;
    }
    @media all and (max-width: 640px) {
        font-size: 12px;
    }
    @media all and (max-width: 360px) {
        font-size: 11px;
    }
`;
const AssignmentStatusSubContainer = styled.div`
    margin-top: 50px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0px 0px 2px gray;
    @media all and (max-width: 1080px) {
        margin-top: 70px;
    }
    @media all and (max-width: 980px) {
        margin-top: 40px;
    }
`;
const AssignmentStatusInnerContainer = styled.div`
    padding: 63px 0px 30px 20px;
    @media all and (max-width: 1280px) {
        padding: 43px 0px 30px 20px;
    }
    @media all and (max-width: 1080px) {
        padding: 20px 0px 21px 20px;
    }
    @media all and (max-width: 980px) {
        padding: 26px 0px 26px 39px;
    }
    @media all and (max-width: 640px) {
        padding: 26px 0px 26px 18px;
    }
`;
const AssignmentDetails = styled.ul``;
const AssignmentDetailsList = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    &:last-child {
        margin-bottom: 0px;
    }
    @media all and (max-width: 980px) {
        margin-bottom: 20px;
    }
    @media all and (max-width: 640px) {
        display: flex;
        flex-wrap: wrap;
    }
`;
const DetailsLeft = styled.div`
    width: 63%;
    @media all and (max-width: 640px) {
        width: 95%;
    }
`;
const SubjectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;
const DetailsRight = styled.div`
    width: 23%;
    @media all and (max-width: 1280px) {
        width: 28%;
    }
    @media all and (max-width: 1080px) {
        width: 31%;
    }
`;
const SubjectName = styled.h5`
    font-family: Poppins-Bold;
    font-size: 13px;
    @media all and (max-width: 480px) {
        font-size: 12px;
    }
`;
const ProgressBar = styled.div`
    display: flex;
    display: ${(props) => (props.visible ? "flex" : "none")};
    /* margin-right: 10px; */
`;
const ProgressMathsBar = styled.div`
    display: flex;
    display: ${(props) => (props.visible ? "flex" : "none")};
`;
const ProgressBarSubContainer = styled.div`
    width: 132px;
    height: 12px;
    border-radius: 5px;
    background-color: gray;
    @media all and (max-width: 1280px) {
        width: 93px;
        height: 9px;
    }
    @media all and (max-width: 360px) {
        width: 87px;
        height: 8px;
    }
`;
const ProgressBarInnerContainer = styled.div`
    width: 70px;
    height: 12px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: blue;
    @media all and (max-width: 1280px) {
        width: 49px;
        height: 8px;
    }
    @media all and (max-width: 360px) {
        width: 46px;
        height: 8px;
    }
`;
const SubjectDetails = styled.p`
    font-size: 11px;
    color: gray;
    @media all and (max-width: 640px) {
        margin-bottom: 17px;
    }
`;
const ResumeButton = styled.button`
    border: 1px solid yellow;
    padding: 6px 12px 6px 12px;
    font-family: "Poppins-Medium";
    border-radius: 3px;
    color: yellow;
    font-size: 12px;
`;
const StartButton = styled.button`
    border: 1px solid blue;
    padding: 5px 22px 5px 22px;
    font-family: "Poppins-Medium";
    border-radius: 3px;
    color: blue;
    font-size: 12px;
`;
const LiveContainer = styled.div`
    width: 42%;
    @media all and (max-width: 1080px) {
        width: 46%;
    }
    @media all and (max-width: 980px) {
        width: 79%;
    }
    @media all and (max-width: 768px) {
        width: 84%;
    }
`;
const LiveHeadingContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const RightTitle = styled.h6`
    font-family: "Poppins-Bold";
    font-size: 19px;
    margin-right: 20px;
    @media all and (max-width: 1080px) {
        font-size: 17px;
    }
`;
const Circle = styled.div`
    align-items: center;
    background-color: #5af096;
    border-radius: 20px;
    width: 13px;
    height: 13px;
    @media all and (max-width: 980px) {
        width: 10px;
        height: 10px;
    }
`;
const LiveSectionSubContainer = styled.div`
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0px 0px 3px gray;
`;
const TopContainer = styled.div`
    padding: 10px 20px 10px 30px;
    border-bottom: 1px solid #a6a4a5;
    @media all and (max-width: 1280px) {
        padding: 10px 20px 10px 17px;
    }
`;
const Lecture = styled.span`
    font-size: 14px;
    font-family: "Poppins-Medium";
    @media all and (max-width: 1280px) {
        font-size: 13px;
    }
`;
const HorizontalLine = styled.hr`
    width: 70%;
    color: gray;
`;
const MiddleContainer = styled.div`
    display: flex;
    padding: 20px 27px 20px 30px;
    border-bottom: 1px solid #a6a4a5;
    @media all and (max-width: 1280px) {
        padding: 15px 27px 15px 18px;
    }
    @media all and (max-width: 640px) {
        display: flex;
        flex-wrap: wrap;
    }
`;
const MiddleLeftContainer = styled.div`
    width: 73%;
    @media all and (max-width: 640px) {
        width: 90%;
        margin-bottom: 14px;
    }
`;
const RevisionDetails = styled.p`
    font-size: 14px;
    font-family: "Poppins-Medium";
    @media all and (max-width: 1280px) {
        font-size: 12px;
    }
`;
const ProfessorName = styled.p`
    font-size: 12px;
    font-family: "Poppins-Medium";
    margin-left: 5px;
`;
const MiddleRightContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #1a40f9;
    border-radius: 5px;
    height: 34px;
    width: 100px;
    @media all and (max-width: 640px) {
        height: 30px;
        width: 88px;
    }
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
    height: 34px;
    background-color: #516bfe;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    @media all and (max-width: 640px) {
        height: 30px;
    }
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
    padding: 17px 60px 2px 33px;
    @media all and (max-width: 640px) {
        padding: 17px 60px 2px 17px;
    }
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
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 640px) {
        display: flex;
        flex-wrap: wrap;
    }
`;
const TickImageContainer = styled.div`
    width: 20px;
    margin-right: 20px;
    @media all and (max-width: 1080px) {
        width: 18px;
        margin-right: 10px;
    }
    @media all and (max-width: 980px) {
        width: 16px;
    }
`;
const TopicNameContainer = styled.div`
    width: 45%;
    @media all and (max-width: 1080px) {
        width: 49%;
    }
    @media all and (max-width: 640px) {
        width: 84%;
    }
    @media all and (max-width: 360px) {
        width: 82%;
    }
`;
const TimeContainer = styled.div`
    width: 29%;
    @media all and (max-width: 640px) {
        margin-left: 44px;
    }
    @media all and (max-width: 480px) {
        margin-left: 30px;
    }
`;
const ButtonContainer = styled.div`
    width: 10%;
`;
const TickImage = styled.img`
    display: block;
    width: 100%;
`;
const TopicName = styled.span`
    font-size: 12px;
    font-family: "Poppins-Medium";
    @media all and (max-width: 1080px) {
        font-size: 10px;
    }
    @media all and (max-width: 980px) {
        font-size: 11px;
    }
    @media all and (max-width: 640px) {
        font-size: 12px;
    }
    @media all and (max-width: 360px) {
        font-size: 10px;
    }
`;
const Time = styled.span`
    font-size: 11px;
    font-family: "Poppins-Medium";
    margin-right: 10px;
    @media all and (max-width: 1080px) {
        font-size: 10px;
    }
    @media all and (max-width: 980px) {
        font-size: 11px;
    }
    @media all and (max-width: 640px) {
        font-size: 12px;
    }
    @media all and (max-width: 360px) {
        font-size: 10px;
    }
`;
const MediumButton = styled.button`
    font-family: "Poppins-Medium";
    padding: 2px 8px 2px 8px;
    background-color: #d9d9d9;
    font-size: 10px;
    border-radius: 4px;
    color: #9c9696;
`;
const HardButton = styled.button`
    font-family: "Poppins-Medium";
    padding: 2px 16px 2px 16px;
    background-color: gray;
    font-size: 10px;
    border-radius: 4px;
    color: #9f9596;
`;
export default Schedular;
