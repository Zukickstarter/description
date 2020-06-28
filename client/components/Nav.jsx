import React from 'react';
import Scrollchor from 'react-scrollchor';
import { NavButton as Button, ButtonWithBottom, Ul } from '../stylesFormat';
import {Grid, Row, Col} from '../stylesLayout';

import Stack from '@bedrock-layout/stack';
import Padbox from '@bedrock-layout/padbox';
import Center from '@bedrock-layout/center';


const Nav = (props) => (
  <Stack as={Center} as={Padbox}>
    <Scrollchor to="#story">
      <ButtonWithBottom as={Padbox}>
        STORY
      </ButtonWithBottom>
    </Scrollchor>
    <Scrollchor to="#risks">
      <Button as={Padbox}>RISKS AND CHALLENGES</Button>
    </Scrollchor>
  </Stack>
);

export default Nav;