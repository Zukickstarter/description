import React from 'react';
import styled from 'styled-components';
import { StyledDesc, NavHeader } from '../StyledDiv.js';


const Risks = ({risks}) => (
  <StyledDesc>
    <NavHeader>Risks and Challenges</NavHeader>
    <div>{risks}</div>
  </StyledDesc>
);

export default Risks;