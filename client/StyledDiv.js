import styled from 'styled-components';

export const StyledDesc = styled.div`
  display: flex;
  align-items: center; // <-this keeps the image unstretched
  flex-flow: column;
  max-width: 680px;
  background: #fff;
  color: #282828;
  font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const Img = styled.img`
  display: flex;
  align-items: center; // <-this keeps the image unstretched
  flex-flow: column;
  width: 100%;
`;

export const NavHeader = styled.h3`
  display: block;
  align-items: left
  font-size: 2.1rem;
  font-weight: 400;
  line-height: 30px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export const SectionHeader = styled.h1`
  color: #282828;
  margin-bottom: 3rem;
  font-size: 2.8rem;
  line-height: 40px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  margin-block-start: 1em;
  margin-block-end: 1em;
  display: block;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export const Caption = styled.figcaption`
  font-size: 14px;
  font-style: italic;
  text-align: center;
  color: #9B9E9E;
  padding-right: 1.2rem !important;
  padding-left: 1.2rem !important;
  display: flex;
`;
