import React from 'react';
import styled from 'styled-components';
import Frame from '@bedrock-layout/frame'
import { StyledDesc, NavHeader, SectionHeader, Caption, Img, FontFaces } from '../stylesFormat';

const Story = ({story}) => {
  const { textTop, imageMiddle, imageMiddleCaption, textBottom } = story;
  return (
    <StyledDesc>
      <NavHeader id="story">Story</NavHeader>
      <div>
        {textTop}
      </div>
      <Frame ratio={[1,1]}>
        <img src={imageMiddle} alt={imageMiddleCaption}/>
      </Frame>
      <Caption>{imageMiddleCaption}</Caption>
      <div>
        {textBottom}
      </div>
    </StyledDesc>
  );
};

export default Story;