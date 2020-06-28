import React from 'react';
import Scrollchor from 'react-scrollchor';
import { NavButton as Button, ButtonWithBottom, Ul } from '../stylesFormat';


const Nav = (props) => (
  <Ul>
    <li>
      <Scrollchor to="#story"><ButtonWithBottom>STORY</ButtonWithBottom></Scrollchor>
    </li>
    <li>
      <Scrollchor to="#risks"><Button>RISKS AND CHALLENGES</Button></Scrollchor>
    </li>
  </Ul>
);

export default Nav;