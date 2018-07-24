import React, { Component } from 'react';

import GroupForm from "./group-form-component.js";

//  The group page.
class GroupPage extends Component {
  render() {
    return (
      <div class="container col-sm-12 col-md-12" id="mainPage">
        <GroupForm></GroupForm>
      </div>
    );
  }
}

export default GroupPage;
