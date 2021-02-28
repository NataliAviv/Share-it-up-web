import React from 'react';
import './Profile.css';
import user from '../../imgs/avatar icon-02.png';
import {
  getUserName,
  getUserEmail,
  getUserImg,
  getUserPhone
} from '../../dataBase/UserDetailsDb';
import { getFriendsDb } from '../../dataBase/FriendsDetailsDb';
import { getGroupDb } from '../../dataBase/GroupDetailsDb';

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='header-background'>
        {renderUserDetails()}
        {renderUserFriends()}
        {renderUserGroups()}
      </div>
    </div>
  );

  function renderUserDetails() {
    const groups = getGroupDb();
    const friends = getFriendsDb();
    if (!Array.isArray(groups) || !Array.isArray(friends)) return null;

    const details = [
      { title: 'Groups', value: groups.length },
      { title: 'Friends', value: friends.length }
    ];
    return (
      <div className='border-user-details'>
        <img className='user-img' src={getUserImg() || user} alt='User' />

        <div className='profile-userDetails'>{getUserName()}</div>
        <div className='profile-userDetails'>{getUserPhone()}</div>
        <div className='profile-userDetails'>{getUserEmail()}</div>
        <div className='user-total-details'>
          {details.map((detail, index) => {
            const { title, value } = detail;
            return (
              <div>
                <div className='col-detail '>
                  <label>{title}</label>
                </div>
                <div className='col-detail' style={{ color: 'gray' }}>
                  <label>{value}</label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function renderUserFriends() {
    let friendsInfo = getFriendsDb();
    if (!Array.isArray(friendsInfo)) return null;
    return (
      <div className='box'>
        <div className='friends-container'>
          <div className='title'>Friends</div>
          {friendsInfo.map((friend, index) => {
            const { name, pic } = friend;
            return (
              <div className='img-container' key={index}>
                <p>{name}</p>
                <img className='groups-img' src={pic} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function renderUserGroups() {
    let groupsInfo = getGroupDb();
    if (!Array.isArray(groupsInfo)) return null;
    return (
      <div className='box friends-container'>
        <div className='title'>Groups</div>
        {groupsInfo.map((group, index) => {
          const { groupName, groupImage } = group;
          return (
            <div className='img-container' key={index}>
              <p>{groupName}</p>
              <img className='groups-img' src={groupImage} alt='' />
            </div>
          );
        })}
      </div>
    );
  }
};

export default Profile;
