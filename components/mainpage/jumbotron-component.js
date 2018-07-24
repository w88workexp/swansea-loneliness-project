import React, { Component } from 'react';

//  The jumbotron component for the main page.
class MainJumbotronComponent extends Component {
  render() {
    return (
      <div id="cta" class="jumbotron row smallPadding">
        <h1>The Swansea Loneliness Project</h1>
        <p class="lead">
          Technology has enabled more people around the world to connect with each other. However, there is a rise
          of loneliness at a local level of people of all ages. The mission of this project is to connect these people with
          social groups and activities.
        </p>
        <a href="/groups" class="btn btn-primary">Add Your Group</a>
      </div>
    );
  }
}

export default MainJumbotronComponent;
