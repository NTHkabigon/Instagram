import React, { Component } from "react";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/Menu.css";
import "./App.css";
import "./css/Explore.css";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Inbox from "./pages/Inbox";

import UserContext from "./js/context";
import callAPI from "./js/callAPI";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      saveprofiles: [],
      scrolled: 0
    };
  }
  //lấy dữ liệu từ API
  componentDidMount() {
    callAPI("GET", null).then((res) => {
      const dataprofiles = res.data.results;
      const newProfiles = [];
      for (let index in dataprofiles) {
        let data = dataprofiles[index];
        newProfiles.push({
          ...data,
          islike: false,
          numberlike: 0,
          comment: [],
        });
      }
      this.setState({
        profiles: newProfiles,
      });
    });
    const menuHeght = document.getElementById("menu___top").clientHeight ;    
    this.setState({
      scrolled: menuHeght
    })
  }
  //nhận dữ liệu xử lý setState nút like
  callbackHandlerFunction = (newProfiles) => {
    this.setState({
      profiles: newProfiles,
    });
  };
    //nhận dữ liệu xử lý setState comment
  callbackHandler = (newCommenProfiles) => {
    this.setState({
      profiles: newCommenProfiles,
    });
  };
  render() {
    return (
      <div className="App">
        <UserContext.Provider value={this.state.profiles}>
          <Router>
            <Menu/>
            <div className="view__content" style={{marginTop: this.state.scrolled}} >
              <Route
                path="/"
                exact
                render={(props) => {
                  return (
                    <Home
                      handleClickParent={this.callbackHandlerFunction}
                      commentParent={this.callbackHandler}
                    />
                  );
                }}
              ></Route>
              <Route path="/inbox" exact component={Inbox}></Route>
              <Route path="/explore" exact component={Explore}></Route>
              {/* <Route path="/activity" exact></Route>
               */}
            </div>
          </Router>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
