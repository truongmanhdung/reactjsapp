import React, { Component } from "react";
class result extends Component {
  setColor(){
    return {
      color: this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.fontSize
    }
  }
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <p>Color: {this.props.color} - Fontsize: {this.props.fontSize}px</p>
        <div className="">
          <div className="active1 p-2" style={this.setColor()}
          >Nội dung setting</div>
        </div>
      </div>
    );
  }
}

export default result;
