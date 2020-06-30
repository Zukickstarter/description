import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { GlobalStyle, css, NavBarButton } from './stylesFormat';
import {Grid, Row, Col, StickyRow} from './stylesLayout';
import AppBoundary from '@bedrock-layout/appboundary';
import Padbox from '@bedrock-layout/padbox';


import Story from './components/Story.jsx';
import Risks from './components/Risks.jsx';
import SideBar from './components/SideBar.jsx';
import NavBar from './components/NavBar.jsx';


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
            <NavBar />
            <Row>
              <Col size={1} collapse='laptop'>
                <SideBar />
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