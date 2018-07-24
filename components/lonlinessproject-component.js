import React, { Component } from 'react';

import MainMenuComponent from "./mainmenu-component.js";


//  The main lonliness project app.
class LonlinessApp extends Component {
  render() {

    return (
      <div className="col-sm-12 col-md-12">
        <MainMenuComponent></MainMenuComponent>
      </div>
    );
  }
}

export default LonlinessApp;
