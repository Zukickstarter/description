import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { GlobalStyle, css, HeaderButton } from './stylesFormat';
import {Grid, Row, Col, StickyRow} from './stylesLayout';
import AppBoundary from '@bedrock-layout/appboundary';
import {Stack} from 'every-layout';
import Padbox from '@bedrock-layout/padbox';
import InlineCluster from '@bedrock-layout/inline-cluster';
import Frame from '@bedrock-layout/frame';

import Story from './components/Story.jsx';
import Risks from './components/Risks.jsx';
import Nav from './components/Nav.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      id: props.id,
      data: []
    };
  }

  componentDidMount() {
    axios.get(`/api/description/${this.state.id}`)
      .then(res => {
        this.setState({
          isLoaded: true,
          data: res.data[0]
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
      );
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <AppBoundary>
          <GlobalStyle />
          <Grid>
            <Padbox style={{ borderBottom: '1px solid #DCDEDD', borderTop: '1px solid #DCDEDD' }} padding="xl">
              <Row>
                <Col size={5} >
                  <InlineCluster gutter="xl" justify="start" align="start">
                    <HeaderButton>Campaign {data.id}</HeaderButton>
                    <HeaderButton>FAQ</HeaderButton>
                    <HeaderButton>Updates</HeaderButton>
                    <HeaderButton>Comments</HeaderButton>
                    <HeaderButton>Community</HeaderButton>
                  </InlineCluster>
                </Col>
                {/* <Col size={3} >
                  <InlineCluster gutter="xl" justify="end" align="end">
                    <Padbox style={{ backgroundColor: '#009E74',
                      color: '#FFFFFF'}} padding="lg">Back this project
                    </Padbox>
                    <Frame ratio={[1, 1]}>
                      <img src={'http://endlessicons.com/wp-content/uploads/2014/03/bookmark-icon-1.png'} alt="bookmark"/>
                    </Frame>
                    <HeaderButton>Save</HeaderButton>
                  </InlineCluster>
                </Col> */}
              </Row>
            </Padbox>
            <Row>
              <Col size={1} collapse='laptop'>
                <Nav />
              </Col>
              <Col size={4} as={Padbox}>
                <Story story={data.story}/>
                <Risks risks={data.risks}/>
              </Col>
              <Col size={2}>
                <div></div>
              </Col>
            </Row>
          </Grid>
        </AppBoundary>

      );
    }
  }
}

export default App;