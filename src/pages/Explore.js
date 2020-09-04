import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import ProfileContext from "../js/context";
class Explore extends Component {
  static contextType = ProfileContext;

  render() {
    const user = this.context;
    
    return (
      <MDBRow>
        <MDBCol md="9" className="explore__view mx-auto p-3">
          <MDBRow className="masonry-with-columns-2">            
           {
             user.map((profile, index) => <img src={profile.picture.large} key={index}/>)
           }
          </MDBRow>
        </MDBCol>
      </MDBRow>
    );
  }
}
export default Explore;
