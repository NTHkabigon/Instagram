import React, { Component, useContext } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Story from "../components/ItemStory";
import Status from "../components/ItemStatus";
import "../css/ItemHome.css";
import ProfileContext from "../js/context";
import Left from "../icon/return.png";
import Right from "../icon/next.png";
class Home extends Component {
  constructor(props) {
    super(props);
    this.likeItem = this.likeItem.bind(this);
    this.commentItem = this.commentItem.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }
  // xử lý nút like
  likeItem(profile) {
    const profiles = this.context;
    const islike = profile.islike;
    const index = profiles.indexOf(profile);
    let newProfiles = [];
    if (islike) {
      newProfiles = [
        ...profiles.slice(0, index),
        {
          ...profile,
          islike: !islike,
          numberlike: profile.numberlike - 1,
        },
        ...profiles.slice(index + 1),
      ];
      this.props.handleClickParent(newProfiles);
    } else {
      newProfiles = [
        ...profiles.slice(0, index),
        {
          ...profile,
          islike: !islike,
          numberlike: profile.numberlike + 1,
        },
        ...profiles.slice(index + 1),
      ];
      this.props.handleClickParent(newProfiles);
    }
  }
  //xử lý cuộn trái thanh story
  scrollLeft() {  
    document.getElementById("story__scroll").scrollLeft -= 100;
  }
  //xử lý cuộn phải thanh story
    scrollRight() {
    document.getElementById("story__scroll").scrollLeft += 100;
  }
  //xử lý comment
  commentItem = (comment, key) => {
    const profiles = this.context;
    const text = comment;
    const index = key;
    let newCommenProfiles = [];
    let newprofile = profiles[index];
    newCommenProfiles = [
      ...profiles.slice(0, index),
      {
        ...newprofile,
        comment: [...newprofile.comment, text],
      },
      ...profiles.slice(index + 1),
    ];
    this.props.commentParent(newCommenProfiles);
  };
  static contextType = ProfileContext;
  render() {
    const user = this.context;
    return (
      <MDBRow className="Home">
        <MDBCol md="9" className="mx-auto">
          <MDBCol md="8" >
            <MDBRow className="story__content">
            <img
              src={Left}
              width="20px"
              height="20px"
              style={{
                zIndex: "1",
                top: "50%",
                position: "absolute",
                transform: "translate(10px, -50%)",
              }}
              onClick={this.scrollLeft}
            />
            <MDBRow id="story__scroll" className="story__view mx-auto my-3">
              {user.map((profile, index) => (
                <Story profile={profile} key={index} />
              ))}
            </MDBRow>
            <img
              src={Right}
              width="20px"
              height="20px"
              style={{
                zIndex: "1",
                top: "50%",
                right: "10px",
                position: "absolute",
                transform: "translate(0, -50%)",
              }}
              onClick={this.scrollRight}
            />
            </MDBRow>
            <MDBRow>
              {user.map((profile, index) => (
                <Status
                  profile={profile}
                  index={index}
                  onClick={() => this.likeItem(profile)}
                  comment={this.commentItem}
                />
              ))}
            </MDBRow>
          </MDBCol>
          <MDBCol md="4"></MDBCol>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default Home;
