import { StyledDiv } from './Child.styled';

interface ChildProps {
  text: string;
  subText?: string;
  someNumber: number;
  bool: boolean;
}

export const Child = ({text}:ChildProps) => {
  return (
    <div>
      {text}
      <StyledDiv>
        Styled div text
      </StyledDiv>
    </div>
  )
}