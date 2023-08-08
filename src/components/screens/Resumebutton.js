import React, { useState } from 'react';
import styled from 'styled-components';
import setShowPhysicsProgressBar from "./Schedular"

function ResumeButton({ onClick }) {
    const [state, setState] = useState(false);
    const toggle = () => {
        setState(!state);
    }

    const handleResumeClick = () => {
        if (state) {
            setShowPhysicsProgressBar(true);
            // Perform your resume-related actions here
            console.log('Resume button clicked');
            // Call the passed onClick function from props
            onClick();
        }
    };

    return (
        <RButton
            onClick={() => {
                toggle();
                handleResumeClick();
            }}
            className={'toggle--button ' + (state ? 'toggle--resume' : '')}
        >
            {state ? 'Start' : 'Resume'}
        </RButton>
    );
}
const RButton = styled.button`
    border: 1px solid yellow;
    padding: 6px 12px 6px 12px;
    font-family: "Poppins-Medium";
    border-radius: 3px;
    color: yellow;
    font-size: 12px;
`;
export default ResumeButton;





