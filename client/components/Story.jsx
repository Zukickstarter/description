import React from 'react';

class Story extends React.Component {
  render() {
    return <p>Hello, this is a story: {this.props.story.textTop.replace(/[\r]+/g, '\n')}</p>;
  }
}

export default Story;