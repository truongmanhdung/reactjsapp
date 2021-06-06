import React, { Component} from 'react';
import './App.css';
// import Reset from './components/reset.js';
// import Result from './components/result.js';
// import SiteSetting from './components/siteSetting.js';
// import ColorSetting from './components/colorSetting.js';
class App extends Component{
    // constructor(props){
    //   super(props);
    //   this.state = {
    //     color : 'red',
    //     fontSize : 16
    //   }
    // }
    // onSetColor = (params)=>{
    //   this.setState({
    //     color : params,
    //   })
    // }
    // onChangeSize = (value)=>{
    //   if(this.state.fontSize+value>=8 && this.state.fontSize+value<=36){
    //     this.setState({
    //       fontSize : this.state.fontSize + value
    //     })
    //   }
    // }
    // onSettingDefault= (value)=>{
    //   if(value === true){
    //     this.setState({
    //       color : 'red',
    //       fontSize : 16
    //     })
    //   }
    // }
    // làm việc với form 
    constructor(props) {
      super(props);
      this.state = {
        username : '',
        password : '',
        description: '',
        selectGender: '',
        language: 'vn',
        checkInfility: true
      };
    }
    handleInputChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        [name]: value,
      })
    }
    onHandleSubmit = (event) =>{
      event.preventDefault();
      console.log(this.state)
    }
    render(){
      return (
        <div>

          {/* bài chỉnh màu số liệu color, size */}
          {/* <div className="container">
            <div className="row">
              <ColorSetting color={this.state.color} onReceiveColor={this.onSetColor}/>
              
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <SiteSetting fontSize = {this.state.fontSize} onChangeSize={this.onChangeSize}/>
                <Reset onSettingDefault={this.onSettingDefault}/>
              </div>
              
              <Result color={this.state.color}
                    fontSize = {this.state.fontSize}
              />
              
            </div>
            
          </div> */}


          {/* làm việc với form */}
          
          <div className="container mt-4 p-4 bg-light">
            <form onSubmit={ this.onHandleSubmit }>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input value={this.state.username} type="text" name="username" onChange={this.handleInputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input value={this.state.password} type="password" name="password" onChange={this.handleInputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              {/* textarea */}
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea value={this.state.description} className="form-control"type="text" name="description" onChange={this.handleInputChange}></textarea>
              </div>
              {/* select option */}
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <select className="form-select" name="selectGender" value={this.state.selectGender} onChange={this.handleInputChange} >
                  <option value={0}>Nam</option>
                  <option value={1}>Nữ</option>
                </select>
              </div>
              {/* input radio */}
              <div className="mb-3 d-flex">
              <label className="form-label">Language: </label>
                <div className="form-check ms-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="radio1"
                    value="vn"
                    name="language"
                    onChange={this.handleInputChange}
                    checked={this.state.language==="vn"}
                  />
                  <label className="form-check-label">
                    Việt Nam
                  </label>
                </div>
                <div className="form-check ms-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="radio1"
                    value="en"
                    name="language"
                    onChange={this.handleInputChange}
                    checked={this.state.language==="en"}
                  />
                  <label className="form-check-label">
                    English
                  </label>
                </div>
              </div>
              {/* checkbox */}
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" name="checkInfility"
                 value="true" id="check1" onChange={this.handleInputChange}
                  checked={this.state.checkInfility===true}
                />
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="reset" className="btn btn-default ms-2">Reset</button>
            </form>
          </div>
          
          
        </div>
      )
    }
}

export default App;