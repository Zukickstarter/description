import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { GlobalStyle, css, } from './stylesFormat';
import {Grid, Row, Col, StickyRow} from './stylesLayout';
import AppBoundary from '@bedrock-layout/appboundary';
import Stack from '@bedrock-layout/stack';
import Padbox from '@bedrock-layout/padbox';

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
            <StickyRow>
              <Stack as={Padbox}>
                <Col size={1}>
                  <h1>Kickstarter Campaign</h1>
                  <p>This is product name: {data.id}</p>
                </Col>
              </Stack>
            </StickyRow>
            <Row>
              <Col as={StickyRow} size={1} collapse='laptop'>
                <Nav />
              </Col>
              <Col size={4}>
                <Stack as={Padbox}>
                  <Story story={data.story}/>
                  <Risks risks={data.risks}/>
                </Stack>
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