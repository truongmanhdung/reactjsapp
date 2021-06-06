/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "../App.css";

class Content extends Component {
  
  // eslint-disable-next-line no-useless-constructor
  //cách 1
  // constructor(props){
  //   super(props);
  //   this.onAddToCart = this.onAddToCart.bind(this);
  // }
  // onAddToCart1(){
  //   alert(this.props.name);
  //   console.log()
  // }
  //cách 2
  onAddToCart2 = ()=>{
    alert(this.props.name);
    console.log()
  }
  render() {
    return (
      <div className="col-3">
        <div className="card">
          <div className="p-2">
            <img src={this.props.image} className="card-img-top"></img>
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">{this.props.name}</h5>
            <p>{this.props.price} đ</p>
            <a className="btn btn-primary" onClick={this.onAddToCart2}>Add To Cart</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
