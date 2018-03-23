import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import './App.css';

class App extends Component {
  
  login () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const request = {"auth": {"email": email, "password": password}}
    console.log(request)
    axios.post("http://localhost:3001/api/user_token", {
      data: request
      
      // headers: {
      //   "alg": "HS256",
      //   "typ": "JWT"
      // }
    })
    .then(function (result) {
      console.log(result);
      localStorage.setItem("jwt", result.jwt);
    });
  }

  render() {

    return (
      <div className="App">
        <h1 style={{marginTop: "20vh", marginBottom: "5vh"}}>
          Login
        </h1>
        <form>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            name="email"
            id="email"
            type="email"
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            name="password"
            id="password"
            type="password"
          />
          </form>
          <br />
          <button
            onClick={this.login}
          >
              Login
          </button>
        <br />
      </div>
    );
  }
}

export default App;
