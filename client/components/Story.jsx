import React from 'react';
import styled from 'styled-components';
import { StyledDesc, SectionHeader, Caption, Img, FontFaces } from '../stylesFormat';

import Frame from '@bedrock-layout/frame';
import Padbox from '@bedrock-layout/padbox';
import Center from '@bedrock-layout/center';
import Stack from '@bedrock-layout/stack';


const Story = ({story}) => {
  const { textTop, imageMiddle, imageMiddleCaption, textBottom } = story;
  return (
    <StyledDesc>
      <Stack >
        <SectionHeader id="story">Story</SectionHeader>
        <div>
          {textTop}
        </div>
        <div>
          <Frame ratio={[1, 1]} >
            <img src={imageMiddle} alt={imageMiddleCaption}/>
          </Frame>
        </div>
        <Caption as={Center} >{imageMiddleCaption}</Caption>
        <div>
          {textBottom}
        </div>
      </Stack>
    </StyledDesc>
  );
};

export default Story;