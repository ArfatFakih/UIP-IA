import React from 'react';
import '../UserSetting/UserSetting.css';

const UserSetting = () => {
  return (
    <div className="user-settings-container">
      <h2 className="section-title">User Settings</h2>

      <div className="settings-section">
        <h3 className="subsection-title">Details</h3>
        <div className="details-grid">
          <div className="detail-input-group">
            <label>Name</label>
            <input type="text" placeholder="Enter First Name" />
          </div>
          <div className="detail-input-group">
            <label>Last Name</label>
            <input type="text" placeholder="Enter Last Name" />
          </div>
          <div className="detail-input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter Your Email"  />
          </div>
          <div className="detail-input-group phone-group">
            <label>Tel - Number</label>
            <div className="phone-input">
              <input type="text" className='phone-input1' placeholder="+91" />
              <input type="text" className='phone-input2' placeholder="Enter Your Num"  />
            </div>
          </div>
        </div>
        <button className="save-button">Save changes</button>
      </div>

      <div className="settings-section">
        <h3 className="subsection-title">Password</h3>
        <div className="password-grid">
          <div className="input-group">
            <label>Change password</label>
            <input type="password" placeholder="Put your password..." />
          </div>
          <div className="input-group">
            <label>Confirm password</label>
            <input type="password" placeholder="Confirm password..." />
          </div>
          <div className="input-group">
            <label>New password</label>
            <input type="password" placeholder="Put your new password..." />
          </div>
          <div className="input-group">
            <label>Confirm new password</label>
            <input type="password" placeholder="Confirm new password..." />
          </div>
        </div>
        <div className="user-button">
            <button className="save-button">Save changes</button>
            <p className="forgot-password">Forgot your password?</p>
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
