import React from 'react';
import styled from 'styled-components';
import { NavBarButton } from '../stylesFormat';
import {Grid, Row, Col} from '../stylesLayout';
import AppBoundary from '@bedrock-layout/appboundary';
import Stack from '@bedrock-layout/stack';
import Padbox from '@bedrock-layout/padbox';
import InlineCluster from '@bedrock-layout/inline-cluster';
import Frame from '@bedrock-layout/frame';

const NavBar = (props) => (
  <>
    {/* NavBar LEFT */}
    <Padbox padding="sm" style={{ borderBottom: '1px solid #DCDEDD', borderTop: '1px solid #DCDEDD'}} >
      <Row >
        <Col size={5} align-items="center" >
          <InlineCluster gutter="lg" justify="start" align="center">
            {/* R E D */}
            <Padbox padding="lg" style={{ border: ''}}>
              <InlineCluster gutter="xl" justify="start" align="center">
                <NavBarButton>Campaign</NavBarButton>
                <NavBarButton>FAQ</NavBarButton>
                <NavBarButton>Updates</NavBarButton>
                <NavBarButton>Comments</NavBarButton>
                <NavBarButton>Community</NavBarButton>
              </InlineCluster>
            </Padbox>
          </InlineCluster>
        </Col>
        <Col size={3} >

          {/* NavBar RIGHT */}
          <InlineCluster gutter="none" justify="end" align="center">
            <Padbox padding="sm">
              <InlineCluster gutter="lg" justify="end" align="center">
                <Padbox style={{ backgroundColor: '#009E74',
                  color: '#FFFFFF'}} padding="lg">Back this project
                </Padbox>
                <Frame ratio={[1, 1]}>
                  <img src={'http://endlessicons.com/wp-content/uploads/2014/03/bookmark-icon-1.png'} alt="bookmark"/>
                </Frame>
                <NavBarButton>Save</NavBarButton>
              </InlineCluster>
            </Padbox>
          </InlineCluster>

        </Col>
      </Row>
    </Padbox>
  </>
);

export default NavBar;