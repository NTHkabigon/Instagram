import React, { Component } from "react";
import { MDBCol, MDBRow } from "mdbreact";

import IconHeart from "../icon/heart.png";
import IconSend from "../icon/send.png";
import IconComment from "../icon/comment.png";
import IconSaved from "../icon/saved.png";
import IconMore from "../icon/more.png";
import IconHeartChecked from "../icon/heartchecked.png";
import IconUser from "../icon/user.png";
import IconUserChecked from "../icon/userchecked.png";
import IconMail from "../icon/mail.png";
import IconMailChecked from "../icon/mailchecked.png";
import IconDate from "../icon/date.png";
import IconDateChecked from "../icon/datechecked.png";
import IconAddress from "../icon/pin.png";
import IconAddressChecked from "../icon/pinchecked.png";
import IconPhone from "../icon/phone.png";
import IconPhoneChecked from "../icon/phonechecked.png";
import IconPassword from "../icon/password.png";
import IconPasswordChecked from "../icon/passwordchecked.png";
class ItemStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      itemHover: "name",
    };
    this.enterAddItem = this.enterAddItem.bind(this);
    this.clickAddItem = this.clickAddItem.bind(this);
    this.mouseenterHandler = this.mouseenterHandler.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  //thêm comment bằng nút enter
  enterAddItem(event) {
    const text = this.state.newValue.trim();
    const key = this.state.key;
    if (event.keyCode === 13) {
      if (!text) {
        return;
      }
      this.setState({
        newValue: "",
      });
      this.props.comment(text, key);
    }
  }
  //thêm comment bằng click chuột
  clickAddItem(event) {
    const text = this.state.newValue;
    const key = this.state.key;
    if (!text) {
      return;
    }
    this.setState({
      newValue: "",
    });
    this.props.comment(text, key);
  }
  onChange(event) {
    this.setState({
      newValue: event.target.value,
      key: event.target.id,
    });
  }
  //xử lý hover hiện dữ liệu
  mouseenterHandler(event) {
    const id = event.target.id;
    if (id === "user") {
      this.setState({
        itemHover: "name",
      });
    } else if (id === "mail") {
      this.setState({
        itemHover: "mail",
      });
    } else if (id === "date") {
      this.setState({
        itemHover: "date",
      });
    } else if (id === "address") {
      this.setState({
        itemHover: "address",
      });
    } else if (id === "phone") {
      this.setState({
        itemHover: "phone",
      });
    } else if (id === "password") {
      this.setState({
        itemHover: "password",
      });
    }
  }
  render() {
    const { profile, onClick, index } = this.props;
    let classNamee = "dontactive__button";
    if (this.state.newValue) {
      classNamee = "active__button";
    }
    let iconsrc = IconHeart;
    if (profile.islike) {
      iconsrc = IconHeartChecked;
    }
    let nameClass = "hiden",
      mailClass = "hiden",
      addressClass = "hiden",
      phoneClass = "hiden",
      passwordClass = "hiden",
      dateClass = "hiden";
    let nameSrc = IconUser,
      mailSrc = IconMail,
      addressSrc = IconAddress,
      phoneSrc = IconPhone,
      passwordSrc = IconPassword,
      dateSrc = IconDate;
    if (this.state.itemHover === "name") {
      nameClass = "show";
      nameSrc = IconUserChecked;
    } else if (this.state.itemHover === "mail") {
      mailClass = "show";
      mailSrc = IconMailChecked;
    } else if (this.state.itemHover === "date") {
      dateClass = "show";
      dateSrc = IconDateChecked;
    } else if (this.state.itemHover === "address") {
      addressClass = "show";
      addressSrc = IconAddressChecked;
    } else if (this.state.itemHover === "phone") {
      phoneClass = "show";
      phoneSrc = IconPhoneChecked;
    } else if (this.state.itemHover === "password") {
      passwordClass = "show";
      passwordSrc = IconPasswordChecked;
    }
    return (
      <MDBCol md="12" className="item__status px-0 my-1">
        <MDBRow className="item__status_header py-3 px-3">
          <img src={profile.picture.thumbnail} className="circle-status " />
          <p
            style={{
              fontFamily: "Helvetica",
              fontweight: "bold",
              fontsize: "15px",
            }}
          >
            {profile.name.first} {profile.name.last}
          </p>
          <img
            src={IconMore}
            style={{ position: "absolute", right: "15px", padding: "5px" }}
          />
        </MDBRow>

        <MDBRow className="item__status_image">
          <img src={profile.picture.large} decoding="auto" />
        </MDBRow>
        <MDBRow className="item__status_emotion">
          <MDBCol md="12" className="py-2">
            <img src={iconsrc} onClick={onClick} />
            <img src={IconComment} />
            <img src={IconSend} />
            <img src={IconSaved} style={{ float: "right" }} />
          </MDBCol>
        </MDBRow>
        <MDBRow className="item__status_countliked">
          <MDBCol md="12" className="py-1">
            <p>{profile.numberlike} lượt thích</p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="profile__tile">
          <MDBCol className={nameClass} md="12">
            <h6>My name is</h6>
          </MDBCol>
          <MDBCol className={mailClass} md="12">
            <h6>My email address is</h6>
          </MDBCol>
          <MDBCol className={dateClass} md="12">
            <h6>My birthday is</h6>
          </MDBCol>
          <MDBCol className={addressClass} md="12">
            <h6>My address is</h6>
          </MDBCol>
          <MDBCol className={phoneClass} md="12">
            <h6>My phone is</h6>
          </MDBCol>
          <MDBCol className={passwordClass} md="12">
            <h6>My password is</h6>
          </MDBCol>
        </MDBRow>
        <MDBRow className="profile__text">
          <MDBCol className={nameClass} md="12">
            <h5>
              {profile.name.first} {profile.name.last}
            </h5>
          </MDBCol>
          <MDBCol className={mailClass} md="12">
            <h5> {profile.email} </h5>
          </MDBCol>
          <MDBCol className={dateClass} md="12">
            <h5>{profile.dob.date}</h5>
          </MDBCol>
          <MDBCol className={addressClass} md="12">
            <h5>
              {profile.location.street.number} {profile.location.street.name}
            </h5>
          </MDBCol>
          <MDBCol className={phoneClass} md="12">
            <h5>{profile.phone} </h5>
          </MDBCol>
          <MDBCol className={passwordClass} md="12">
            <h5>{profile.login.password}</h5>
          </MDBCol>
        </MDBRow>
        <MDBRow className="profile__icon">
          <MDBRow className="py-1">
            <MDBCol className="icon__pro">
              <img
                src={nameSrc}
                id="user"
                onMouseEnter={this.mouseenterHandler}
              />

              <img
                src={mailSrc}
                id="mail"
                onMouseEnter={this.mouseenterHandler}
              />

              <img
                src={dateSrc}
                id="date"
                onMouseEnter={this.mouseenterHandler}
              />

              <img
                src={addressSrc}
                id="address"
                onMouseEnter={this.mouseenterHandler}
              />
              <img
                src={phoneSrc}
                id="phone"
                onMouseEnter={this.mouseenterHandler}
              />

              <img
                src={passwordSrc}
                id="password"
                onMouseEnter={this.mouseenterHandler}
              />
            </MDBCol>
          </MDBRow>
        </MDBRow>
        <MDBRow className="item__status_showcomment">
          <MDBCol md="12" className="py-1">
            {profile.comment.map((comment, index) => (
              <p>{comment}</p>
            ))}
          </MDBCol>
        </MDBRow>
        <MDBRow className="item__status_inputcomment">
          <input
            type="text"
            id={index}
            className="form-control form-control-md"
            placeholder="Thêm bình luận..."
            value={this.state.newValue}
            onChange={this.onChange}
            onKeyUp={this.enterAddItem}
          />
          <button onClick={this.clickAddItem} id={classNamee}>
            Đăng
          </button>
        </MDBRow>
      </MDBCol>
    );
  }
}

export default ItemStatus;
