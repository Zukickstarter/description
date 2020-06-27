import React from 'react';
import styled from 'styled-components';
import { StyledDesc, NavHeader } from '../stylesFormat';


const Risks = ({risks}) => (
  <StyledDesc>
    <NavHeader id="risks">Risks and Challenges</NavHeader>
    <div>{risks}</div>
    <div>Learn about accountability on Kickstarter</div>
    <div>Questions about this project? Check out the FAQ</div>
  </StyledDesc>
);

export default Risks;