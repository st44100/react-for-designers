import React from 'react';

export default class MyButtonTwo extends React.Component {
  render() {
    return (
      <button>{this.props.label}</button>
    );
  }
}