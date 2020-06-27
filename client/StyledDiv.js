import styled, {createGlobalStyle, css, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    color: #282828;
    font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    line-height: 3rem;
    margin-bottom: 3rem;
    list-style: none;
  }
`;

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

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
  align-items: center; // <-this keeps the image unstretched
  flex-flow: column;
  width: 100%;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`;

export const Ul = styled.ul`
list-style-type: none;
`;

export const NavButton = styled.button`
  cursor: pointer;
  font-size: 17px;
  text-decoration: underline;
  color: grey;
  background:none;
  border: none;
  outline:none;

  &:hover {
    color: #009E74;
  }
  &:focus {
    color: #009E74;
    font-weight: 700;
  }
`;

export const ButtonWithBottom = styled(NavButton)`
  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: rgb(220, 222, 221);
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
