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
    const story = data.story;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(data.id);
      console.log(data.risks);
      console.log(Object.values(story));
      console.log(story.textTop);
      console.log(story.imageMiddle);
      console.log(story.imageMiddleCaption);
      console.log(story.textBottom);
      return (
        <div>
          <h1>Hello from ZuKickstarter!🍕</h1>
          <h3>This is product number: {data.id}</h3>
          <div className="story" >
            <h2>STORY</h2>
            <div className="text" >
              {story.textTop}
            </div>
            <img src={story.imageMiddle} alt={story.imageMiddleCaption}>
            </img>
            <p className="caption" style={{fontStyle: 'italic'}}>{story.imageMiddleCaption}</p>
            <div className="text">
              {story.textBottom}
            </div>
          </div>
          <div>
            <h2>RISKS AND CHALLENGES</h2>
            <div>
              {data.risks}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;