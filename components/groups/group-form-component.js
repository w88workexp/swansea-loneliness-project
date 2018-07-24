import React, { Component } from 'react';

//  The social media component.
import SocialMedia from "../socialmedia/socialmediacomponents.js";

//  The categories component.
import Categories from "./categories-form.js";

//  The group form.
class GroupForm extends Component {
  render() {
    return (
      <div id="theForm">
        <div>
      		<h2>Submit a group.</h2>
      		<p>If you have a group, please use the form below to submit information.</p>
        </div>
    		<div id="errorMsg" className="warning">
    			<p>This is where the error message will go.</p>
    		</div>
        <div id="adderForm" className="container smallPadding">
          <form name="frmAdder">
        				<div className="form-group">
        					<label for="txtName">Name of Group:</label>
        					<input type="text" id="txtName" />
        				</div>
        				<div className="form-group">
        					<label for="txtMeetingDate">Meeting Date:</label>
        					<input type="date" id="txtMeetingDate" />
        				</div>
        				<div className="form-group">
        					<label for="txtStartTime">Start Time:</label>
        					<input type="time" id="txtMeetingDate" />
        					<label for="txtEndTime">End Time:</label>
        					<input type="time" id="txtEntTime" />
        				</div>
                <Categories></Categories>
        				<div className="form-group">
        					<label for="txtDescription">Description:</label>
        					<textarea rows="5" cols="10" className="form-control"></textarea>
        				</div>
                <SocialMedia></SocialMedia>
        				<div className="form-group">
        					<label for="chkAgreement">By submitting this form, you agree for us to use the data you have provided as defined in our <a href="#">DATA POLICY</a>.</label>
        					<input id="chkAgreement" type="checkbox" className="form-control" value="agree" />
        					<button type="submit" className="btn btn-primary">Search</button>
        					<button type="reset" className="btn btn-primary">Reset</button>
        				</div>
        			</form>
        </div>
      </div>
    );
  }
}

export default GroupForm;
