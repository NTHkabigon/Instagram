import React, { Component } from "react";
import { MDBCol } from "mdbreact";

class Story extends Component {
 
  render() {
    const {profile} = this.props
    return (
      <MDBCol className="pt-2 item__story mx-3">
        <img src={profile.picture.medium} className="circle" />
        <h6>{profile.name.first}</h6>
      </MDBCol>
    );
  }
}

export default Story;
