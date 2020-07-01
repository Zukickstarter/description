import styled, {createGlobalStyle, css, keyframes } from 'styled-components';
import MaisonNeueBookWoff from './assets/fonts/maisonNeueBook.woff';
import MaisonNeueBookWoffTwo from './assets/fonts/maisonNeueBook.woff2';
// import MaisonNeueBookTtf from './assets/fonts/maisonNeueBook.ttf';

export const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    color: #282828;
    font-family: "Arial", "Webdings";
    font-size: 16px;
    /* line-height: 1rem; */
    /* margin-bottom: 3rem; */
  }
`;

export const StyledDesc = styled.div`
  background: #fff;
  color: #282828;
  font-family: "Arial", "Webdings";
  white-space: pre-wrap;
  margin-bottom: 60px;
`;

export const Ul = styled.ul`
list-style-type: none;
`;

export const SideBarButton = styled.p`
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

export const NavBarButton = styled.button`
  display: block;
  cursor: pointer;
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
  text-decoration-style: solid
  color: rgb(40, 40, 40);
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

export const ButtonWithBottom = styled(SideBarButton)`
  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: rgb(220, 222, 221);
`;


export const LinkText = styled(NavBarButton)`
  color: ${props => props.black ? '#037362' : '#282828'};
  /* color: #037362; */
  font-size: 16px;
  font-weight: 700;
  text-decoration: underline;

  &:hover {
    color: ${(props) => props.hoverPrimary ? '#282828' : '#037362'};
  }
`;


// export const SideBar = styled.h3`
//   display: block;
//   font-size: 21px;
//   font-weight: 400;
//   line-height: 30px;
//   /* margin-block-start: 0px; */
//   margin-block-end: 30px;
//   margin-inline-start: 0px;
//   margin-inline-end: 0px;
//   margin-bottom: 30px;
// `;

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
