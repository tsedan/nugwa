import React, { Component } from 'react';

class SchedHandler extends Component {
  state = {
    height: 0
  }
  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(null);
  }
  singleElement() {
    this.setState({ height: this.parseHeight(document.getElementById("transGroup").children[0]) });
  }
  doubleElement() {
    this.setState({ height: this.maxHeight(document.getElementById("transGroup").children) });
  }
  maxHeight(children) {
    let maxArr = [];

    for (let i = 0; i < children.length; i++) {
      if (children[i].children.length === 0) {
        maxArr[i] = 390;
      } else {
        maxArr[i] = children[i].children.length * 65;
      }
    }

    return Math.max(...maxArr);
  }
  parseHeight(item) {
    if (item.children.length === 0) {
      return 390;
    } else {
      return item.children.length * 65;
    }
  }
  render() {
    return this.makeFiller();
  }
  makeFiller = () => {
    return <div style={{height: this.state.height + 'px'}} />;
  }
}

export default SchedHandler;
