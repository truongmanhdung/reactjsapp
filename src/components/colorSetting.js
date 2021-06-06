/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from "react";
class colorSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'blue', 'yellow'],
    };
  }
  showColors(color) {
      return {
        backgroundColor: color
      };
  }
  setActiveColor(color) {
    this.props.onReceiveColor(color);
  }
  render() {
    var elementColors = this.state.colors.map((color, index)=>{
      return <span className="color"
      key={index} style={this.showColors(color)}
      className={this.props.color===color ? 'active': ''}
      onClick = {()=> this.setActiveColor(color)}
      >
      </span>
    })

    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <h3 className="p-4 bg-primary">Color picker</h3>
        <div className="border color d-flex justify-content-around p-3">
          {elementColors}
        </div>
      </div>
    );
  }
}

export default colorSetting;
