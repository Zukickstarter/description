import styled, {createGlobalStyle, css, keyframes } from 'styled-components';
// import MaisonNeueBookWoffTwo from './assets/fonts/maisonNeueBook.woff2';
import MaisonNeueBookWoff from './assets/fonts/maisonNeueBook.woff';
// import MaisonNeueBookTtf from './assets/fonts/maisonNeueBook.ttf';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Maison Neue Book';
    font-weight: normal;
    font-style: normal;
    src:
      url(${MaisonNeueBookWoff}) format('woff');
    }

  body {
    background: #fff;
    color: #282828;
    font-family: "Maison Neue Book", "Webdings";
    font-size: 16px;
    /* line-height: 1rem; */
    /* margin-bottom: 3rem; */
  }
`;

export const StyledDesc = styled.div`
  background: #fff;
  color: #282828;
  font-family: "Maison Neue Book", "Webdings";
  white-space: pre-wrap;
  margin-bottom: 60px;
`;

export const Ul = styled.ul`
list-style-type: none;
`;

export const NavButton = styled.button`
  display: block;
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  text-decoration: underline;
  color: grey;
  background:none;
  border: none;
  /* outline: solid 1px red; */
  vertical-align: baseline;

  &:hover {
    color: #009E74;
  }
  &:focus {
    color: #009E74;
    font-weight: 700;
  }
`;

export const HeaderButton = styled(NavButton)`
  font-size: 14px;
  text-decoration-line: none
  text-decoration-style: solid
  font-weight: 600;
`;

export const ButtonWithBottom = styled(NavButton)`
  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: rgb(220, 222, 221);
`;

export const NavHeader = styled.h3`
  display: block;
  font-size: 21px;
  font-weight: 400;
  line-height: 30px;
  /* margin-block-start: 0px; */
  margin-block-end: 30px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-bottom: 30px;
`;

export const SectionHeader = styled.h1`
  color: #282828;
  line-height: 40px;
  font-weight: bold;
`;

export const Caption = styled.figcaption`
  font-size: 14px;
  font-style: italic;
  color: #9B9E9E;
  /* padding-right: 1.2rem !important;
  padding-left: 1.2rem !important; */
`;
