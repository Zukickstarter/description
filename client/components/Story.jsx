import React from 'react';
import styled from 'styled-components';
import { StyledDesc, NavHeader, SectionHeader, Caption, Img } from '../StyledDiv';

const Story = (props) => {
  const {story} = props;
  const { textTop, imageMiddle, imageMiddleCaption, textBottom } = story;
  return (
    <StyledDesc>
      <NavHeader id="story">Story</NavHeader>
      <div>
        <p>{textTop.replace(/[\r]+/g, '\n')}</p>
        <Img src={imageMiddle} alt={imageMiddleCaption}></Img>
        <Caption>{imageMiddleCaption}</Caption>
      </div>
      <p>
        {textBottom.replace(/[\r]+/g, '\n')}
      </p>
    </StyledDesc>
  );
};

export default Story;