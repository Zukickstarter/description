import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString(),
      id: props.id,
      data: []
    };
  }

  componentDidMount() {
    axios.get(`/api/description/${this.state.id}`)
      .then(res => {
        this.setState({
          data: res.data[0]
        });
      });
  }

  render() {
    console.log(this.state.data.story);
    return (
      <div>
        <h1>Hello from React!🍕</h1>
        <h2>The id is: {this.state.id}.</h2>
        <p>some text</p>
      </div>
    );
  }
}

export default App;