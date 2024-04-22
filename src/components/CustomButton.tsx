import React from 'react';
import { StyledButton } from '../styled/custom-button.tsx';

const CustomButton = ({onClick, display}: {onClick: any, display: string}) => {
  return (<StyledButton onClick={onClick}>
    {display}
  </StyledButton>)
}

export default CustomButton;