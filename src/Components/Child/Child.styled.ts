import styled from 'styled-components';
import { Sibling } from '../Siblink/Sibling';

interface IStyledDivProps {
  fWeight: number;
}

export const StyledDiv = styled.div `
  font-weight: ${(props: IStyledDivProps) => props.fWeight};
`

export const StyledSibling = styled(Sibling) `
  background-color: tomato;
`