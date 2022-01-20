import { StyledDiv, StyledSibling } from './Child.styled';
import { useState } from 'react';

interface ChildProps {
  text: string;
  subText?: string;
  someNumber: number;
  bool: boolean;
}

export const Child = ({text}:ChildProps) => {
  const [someBool, setSomeBool] = useState(true);
  setSomeBool(true)
  return (
    <div>
      {text}
      <StyledDiv fWeight={700}>
        Styled div text
      </StyledDiv>
      {someBool && <StyledSibling />}
    </div>
  )
}