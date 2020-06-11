import React, { Component } from "react";
import fire from "./config/fire";
import Home from "./Home";
import Login from "./Login";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user)
      if (user) {
        this.setState({ user });
        //localStorage.setItem("user", user.uid)
      } else {
        this.setState({ user: null });
        //localStorage.removeItem("user")
      }
    });
  }
  render() {
    return <div>{this.state.user ? <Home /> : <Login />}</div>;
  }
}
export default App;
