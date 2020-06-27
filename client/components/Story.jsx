import React from 'react';
import styled from 'styled-components';
import { StyledDesc, NavHeader, SectionHeader, Caption, Img, FontFaces } from '../stylesFormat';

const Story = ({story}) => {
  const { textTop, imageMiddle, imageMiddleCaption, textBottom } = story;
  return (
    <StyledDesc>
      <NavHeader id="story">Story</NavHeader>
      <div>
        <p>{textTop}</p>
        <Img src={imageMiddle} alt={imageMiddleCaption}></Img>
        <Caption>{imageMiddleCaption}</Caption>
      </div>
      <p>
        {textBottom}
      </p>
    </StyledDesc>
  );
};

export default Story;