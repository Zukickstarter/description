import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle as global } from 'styled-components';

import Story from './components/Story.jsx';
import Risks from './components/Risks.jsx';
import Nav from './components/Nav.jsx';

const GlobalStyle = global`
  body {
    background: #fff;
    color: #282828;
    font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    line-height: 3rem;
    margin-bottom: 3rem;
  }
`;

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
          <h1>Hello from ZuKickstarter!🍕</h1>
          <h3>This is product name: {data.id}</h3>
          <Nav />
          <div id="story">
            <Story story={data.story}/>
          </div>
          <div id="risks">
            <Risks risks={data.risks}/>
          </div>
        </>
      );
    }
  }
}

export default App;