import React from 'react';
import styled from 'styled-components';
import { StyledDesc, NavHeader, SectionHeader, Caption, Img, FontFaces } from '../stylesFormat';

import Frame from '@bedrock-layout/frame';
import Padbox from '@bedrock-layout/padbox';
import Center from '@bedrock-layout/center';


const Story = ({story}) => {
  const { textTop, imageMiddle, imageMiddleCaption, textBottom } = story;
  return (
    <StyledDesc>
      <NavHeader id="story">Story</NavHeader>
      <div>
        {textTop}
      </div>
      <div>
        <Frame ratio={[1, 1]}>
          <img src={imageMiddle} alt={imageMiddleCaption}/>
        </Frame>
      </div>
      <Caption>{imageMiddleCaption}</Caption>
      <div>
        {textBottom}
      </div>
    </StyledDesc>
  );
};

export default Story;