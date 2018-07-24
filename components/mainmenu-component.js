import React, { Component } from 'react';

//  The router stuff.
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//  All the different components for the main menu.
import MainPage from "./mainpage/mainpage.js";
import GroupsPage from "./groups/groups.js"

//  The main lonliness project app.
//  The routing will go here as well.
  const MainMenuComponent = () => (
      <Router>
        <div>
          <nav id="mainMenu" className="navColour nav navbar-static-top col-sm-12 col-md-12 smallPadding">
                <a className="navbar-brand" href="/home">The Swansea Loneliness Project</a>
                <button type="button" className="navbar-toggle collapsed btn btn-light" data-toggle="collapse" data-target="#collapsableMenu">...</button>
                <div id="collapsableMenu" className="collapse navbar-collapse">
                  <ul id="navList">
                      <li><a href="/home">Home</a></li>
                      <li><a href="/groups">Groups</a></li>
                      <li><a href="./about.html">About</a></li>
                      <li><a href="./contact.html">Contact</a></li>
                  </ul>
                </div>
            </nav>
          <Route path="/home" component={main}></Route>
          <Route path="/groups" component={groups}></Route>
        </div>
      </Router>
  );

  //  The mainpage.
  const main = () => (
    <MainPage></MainPage>
  );

  //  Groups
  const groups = () => (
    <GroupsPage></GroupsPage>
  );

export default MainMenuComponent;
