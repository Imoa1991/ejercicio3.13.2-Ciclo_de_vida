import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.secondCall}>Haz click aquí</button>
      );
  }
}

export default Button;
