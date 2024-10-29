import React from 'react';
import '../Pages/CSS/Profile.css'; 
import Sidebar from '../Components/Sidebar/Sidebar';
import ProfilePicAndInfo from '../Components/ProfilePicAndInfo/ProfilePicAndInfo';
import UserSetting from '../Components/UserSetting/UserSetting';
import ProfileStatistics from '../Components/ProfileStatistics/ProfileStatistics';
import BreadcrumbAndProfile from '../Components/BreadcrumbAndProfile/BreadcrumbAndProfile';

const Profile = () => {
  return (
    <div className="profile-main">
        <div className="profile-main-part1">
            <Sidebar />
        </div>
        <div className="profile-main-part1-first">
            <div className="profile-main-part1-one">
                <BreadcrumbAndProfile />
            </div>
            <div className="profile-main-part2">
                <div className="profile-main-part2-first">
                    <ProfilePicAndInfo />
                </div>
                <div className="profile-main-part2-second">
                    <UserSetting />
                </div>
                <div className="profile-main-part2-third">
                    <ProfileStatistics />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Profile;
