import React from 'react';
import styled from 'styled-components';
import { StyledDesc, NavHeader } from '../stylesFormat';
import {Stack} from 'every-layout';



const Risks = ({risks}) => (
  <Stack>
    <StyledDesc>
      <NavHeader id="risks">Risks and Challenges</NavHeader>
      <div>{risks}</div>
      <br></br>
      <br></br>
      <div>Learn about accountability on Kickstarter</div>
      <br></br>
      <br></br>
      <div>Questions about this project? Check out the FAQ</div>
    </StyledDesc>
  </Stack>
);

export default Risks;