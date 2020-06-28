import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { GlobalStyle, css, } from './stylesFormat';
import {Grid, Row, Col} from './stylesLayout';

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
        <>
          <GlobalStyle />
          <Grid>
            <Row>
              <Col size={1}>
                Colum size 1:1
                <h1>Hello froßm ZuKickstarter!</h1>
                <p>This is product name: {data.id}</p>
              </Col>
            </Row>
            <Row>
              <Col size={1} collapse='laptop'>
                Column size 1:5
                <Nav />
              </Col>
              <Col size={5}>
                Column size 5:5
                <Story story={data.story}/>
                <Risks risks={data.risks}/>
              </Col>
            </Row>
          </Grid>
        </>
      );
    }
  }
}

export default App;