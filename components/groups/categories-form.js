import React, { Component } from 'react';


//  The categories drop-down list.
class Categories extends Component {
  render() {
    var categories = [
      { "dv":"SELECT", "uitxt":"-- PLEASE SELECT A CATEGORY --" },
      { "dv":"fitness", "uitxt":"Fitness Activities" },
      { "dv":"artscrafts", "uitxt":"Arts and Crafts" },
      { "dv":"religion", "uitxt":"Religion" },
      { "dv":"outdoors", "uitxt":"Outdoor Activities" },
      { "dv":"entertainment", "uitxt":"Entertainment" },
      { "dv":"historical", "uitxt":"Historical" },
      { "dv":"technology", "uitxt":"Technology" },
      { "dv":"education", "uitxt":"Education" },
      { "dv":"daycare", "uitxt":"Day Care" },
      { "dv":"sports", "uitxt":"Sports" },
      { "dv":"lgbt", "uitxt":"LGBT Support Groups" },
      { "dv":"minorityethnic", "uitxt":"Minority and Ethnic Support Groups" },
      { "dv":"health", "uitxt":"Health Support Groups" },
      { "dv":"youth", "uitxt":"Youth Support Groups" },
      { "dv":"elderly", "uitxt":"Elderly Support Groups" },
      { "dv":"employment", "uitxt":"Employment Support Groups" },
      { "dv":"agriculture", "uitxt":"Agriculture" },
      { "dv":"legal", "uitxt":"Legal Support and Advice" },
      { "dv":"business", "uitxt":"Business Groups and Unions" },
      { "dv":"politics", "uitxt":"Political Groups and Activities" }
    ];
    return (
      <div class="form-group">
        <label for="drpCategory">Category:</label>
        <select id="drpCategory" class="form-control">
        {
          categories.map(function(d){
            return <option value={d.dv}>{d.uitxt}</option>
          })
        }
        </select>
      </div>
    );
  }
}

export default Categories;
