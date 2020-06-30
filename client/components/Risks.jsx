import React from 'react';
import styled from 'styled-components';
import { StyledDesc, SectionHeader, LinkText } from '../stylesFormat';
import Stack from '@bedrock-layout/stack';
import InlineCluster from '@bedrock-layout/inline-cluster';

const Risks = ({risks}) => (
  <Stack>
    <StyledDesc>
      <SectionHeader id="risks">Risks and Challenges</SectionHeader>
      <div>{risks}</div>
      <br></br>
      <br></br>
      <LinkText >Learn about accountability on Kickstarter</LinkText>
      <br></br>
      <br></br>
      <LinkText>Questions about this project? Check out the FAQ</LinkText>
    </StyledDesc>
  </Stack>
);

export default Risks;