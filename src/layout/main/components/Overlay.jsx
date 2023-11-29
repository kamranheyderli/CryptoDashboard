import React from 'react';
import styled from 'styled-components';

const OverlayWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ show }) => (show ? 'block' : 'none')};
  z-index: 1;
`;

const Overlay = ({isOverlayVisible,onClick}) => {
    return <OverlayWrapper show={isOverlayVisible} onClick={onClick} />;

}

export default Overlay