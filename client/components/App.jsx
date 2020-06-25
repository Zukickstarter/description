import React from 'react';
import axios from 'axios';

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
      console.log(data.id);
      console.log(data.risks);
      console.log(data.story);
      console.log(data.story.textTop);
      console.log(data.story.imageMiddle);
      console.log(data.story.imageMiddleCaption);
      console.log(data.story.textBottom);
      return (
        <div>
          <h1>Hello from React!🍕</h1>
          <h2>The id is: {data.id}.</h2>
          <div className="story" >
            <div className="text" >
              TopText
              <img src='https://images-na.ssl-images-amazon.com/images/I/710WW1XPhaL._AC_SL1280_.jpg' alt="this is an img caption">
              </img>
              <div className="text">
                BottomText
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;