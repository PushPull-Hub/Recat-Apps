import React, { Component } from 'react';

class About extends Component {
  clickOnFacebook = () => {
    window.open('https://www.facebook.com/hamza.dahhani.92');
  };
  clickOnGit = () => {
    window.open('https://github.com/PushPull-Hub');
  };
  render() {
    return (
      <React.Fragment>
        <div className="content">
          <center>
            <h1 className=" animated fadeInDown">About</h1>
          </center>
        </div>
        <div className="footer">
          <span className="sentence">For More Check my</span>
          <div>
            <i onClick={this.clickOnGit} className="fab fa-github fa git"></i>
            <span className=" repo ">Repository</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default About;

// <i
// onClick={this.clickOnFacebook}
// className="fa fa-facebook face"
// ></i>
