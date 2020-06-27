import React from 'react';
import Scrollchor from 'react-scrollchor';
import { NavButton as Button } from '../StyledDiv';


const Nav = (props) => (
  <ul>
    <li>
      <Scrollchor to="#story"><Button>STORY</Button></Scrollchor>
    </li>
    <li>
      <Scrollchor to="#risks"><Button>RISKS AND CHALLENGES</Button></Scrollchor>
    </li>
  </ul>
);

export default Nav;