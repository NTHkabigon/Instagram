import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBNavLink, 
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";

import IconHome from "../icon/home.png";
import IconHeart from "../icon/heart.png";
import IconCompass from "../icon/compass.png";
import IconSend from "../icon/send.png";
import LogoInstagram from "../icon/instagramlogo.png";
import IconPerson from "../icon/person.png";
import IconSearch from "../icon/search.png";
import IconProfile from "../icon/profile.png";
import IconSetting from "../icon/setting.png";
import IconSavedMini from "../icon/savedmini.png";
class Menu extends Component {
  render() {
      const {scrolled} = this.props;
     
    
    return(
    <MDBRow id="menu___top" className="top__menu">
      <MDBCol md="9" className="mx-auto py-1">
        <MDBRow>
          <MDBCol md="4" className="logo___insta">
            <MDBNavLink active to="/">
              <img src={LogoInstagram} />
            </MDBNavLink>
          </MDBCol>
          <MDBCol md="5" className="input__search">
            <MDBRow>
              <MDBCol md="9">
                <MDBNavLink active to="#!">
                  <input
                    type="text"
                    id="example3"
                    className="form-control form-control-sm"
                    placeholder="Tìm kiếm"
                  />
                </MDBNavLink>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="3">
            <MDBRow className="load__pages">
              <MDBNavLink to="/">
                <img src={IconHome} />
              </MDBNavLink>
              <MDBNavLink to="/inbox">
                <img src={IconSend} />
              </MDBNavLink>
              <MDBNavLink to="/explore">
                <img src={IconCompass} />
              </MDBNavLink>
              <MDBNavLink to="/activity">
                <img src={IconHeart} />
              </MDBNavLink>

              <MDBDropdown className="drop__menu">
                <MDBDropdownToggle nav>
                  <img src={IconPerson} />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/profile">
                    {" "}
                    <img src={IconProfile} /> Trang cá nhân
                  </MDBDropdownItem>
                  <MDBDropdownItem href="/saved">
                    {" "}
                    <img src={IconSavedMini} /> Đã lưu
                  </MDBDropdownItem>
                  <MDBDropdownItem href="/setting">
                    {" "}
                    <img src={IconSetting} /> Cài đặt
                  </MDBDropdownItem>
                  <hr style={{ margin: 0, padding: 0 }}></hr>
                  <MDBDropdownItem href="#!">Đăng xuất</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </MDBRow>
    )
  }
}
export default Menu;
