import React from 'react';
import Scrollchor from 'react-scrollchor';


const Nav = (props) => (
  <div>
    <div><Scrollchor to="#story">story</Scrollchor></div>
    <div><Scrollchor to="#risks">risks</Scrollchor></div>
  </div>
);

export default Nav;