import React from 'react';
import styled from 'styled-components';
import { StyledDesc, NavHeader, SectionHeader, Caption } from '../StyledDiv.js';

const Story = (props) => {
  const {story} = props;
  const { textTop, imageMiddle, imageMiddleCaption, textBottom } = story;
  return (
    <StyledDesc>
      <NavHeader>Story</NavHeader>
      <p>{textTop.replace(/[\r]+/g, '\n')}</p>
      <img src={imageMiddle} alt={imageMiddleCaption}></img>
      <Caption>{imageMiddleCaption}</Caption>
      <p>
        {textBottom.replace(/[\r]+/g, '\n')}
      </p>
    </StyledDesc>
  );
};

export default Story;