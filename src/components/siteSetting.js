import React, { Component} from 'react';
class siteSetting extends Component{
  changeSize(value){
    this.props.onChangeSize(value);
  }
    render(){
      return (
        <div>
            <h3 className="p-4 bg-light">Size: {this.props.fontSize}px</h3>
            <div className="border d-flex p-4">           
                <button type="button" onClick={() => this.changeSize(-2)} className="btn btn-primary me-2">Giảm</button>
                <button type="button" onClick={() => this.changeSize(+2)} className="btn btn-primary">Tăng</button>
            </div>
        </div>
      )
    }
}

export default siteSetting;