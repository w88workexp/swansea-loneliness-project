import React, { Component } from 'react';

//  The social media links component. Will add the logos for the platforms.
class SocialMedia extends Component {
  render() {
    return (
      <div class="form-group">
        <h3>Please fill in at least one contact method:</h3>
        <label for="txtTelephone">Phone (landline or mobile):</label>
        <input type="tel" id="txtWebsite" />
        <label for="txtEmail">Email:</label>
        <input type="email" id="txtEmail" />
        <label for="txtPostcode">Postcode of Meetup Area:</label>
        <input type="text" id="txtPostcode" />
        <label for="txtWebsite">Website:</label>
        <input type="url" id="txtWebsite" />
        <label for="txtTwitter">Twitter:</label>
        <input type="text" id="txtTwitter" />
        <label for="txtFacebook">Facebook:</label>
        <input type="text" id="txtFacebook" />
        <label for="txtInstagram">Instagram:</label>
        <input type="text" id="txtInstagram" />
        <label for="txtPinterest">Pinterest:</label>
        <input type="text" id="txtPinterests" />
      </div>
    );
  }
}

export default SocialMedia;
