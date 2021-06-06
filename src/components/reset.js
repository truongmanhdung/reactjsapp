import React, { Component } from "react";
class reset extends Component {
  onResetDefault=() =>{
    this.props.onSettingDefault(true);
  }
  render() {
    return (
        <button type="button" className="btn btn-primary mt-3"
          onClick={this.onResetDefault}
        >Reset</button>
    );
  }
}

export default reset;
