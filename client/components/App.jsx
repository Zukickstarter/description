import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString(),
      id: props.id
    };
  }
  // this.props.id = id

  // hello this shaw /image desctiption text/image-number/ and that was an image 🐄

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      date: new Date().toLocaleString()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello from React!🍕</h1>
        <h2>It is {this.state.date}.</h2>
      </div>
    );
  }
}

export default App;