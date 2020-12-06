import React from 'react';
import './Profile.css';
import user from '../../imgs/avatar icon-02.png';
import {getUserName,getUserEmail,getUserImg } from '../../Components/DataBase/UserDetailsDb';
import { getFriendsDb } from '../../Components/DataBase/FriendsDetailsDb';

const Profile=()=>{

    return(
        <div className="profile-container">
            <div className="header-background">
            {renderUserDetails()}
            {renderUserInfrmation()}

            </div>
        </div>
    )

    function renderUserDetails(){
        return(
            <div className="border-user-details">
                <img className="user-img" src={getUserImg() || user} alt="User"/>
               
            <div className="profile-userDetails">{getUserName()}</div>
            <div>{getUserEmail()}</div>
            </div>
        )
    }

    function renderUserInfrmation(){
        let friendsInfo=getFriendsDb();
        return(
            <div className="friends-container">
              {friendsInfo.map((friend,index)=>{
                  const {name,pic} = friend;
                    return(
                        <div key={index}>
                        <p>{name}</p>
                        <img src={pic} alt=""/>
                        </div>
                    );
                })}
            </div>
        )
        
    }

    function renderUserFriends(){
        return(
            <div>
               
            </div>
        )
    }

    function renderUserGroups(){
        return(
            <div>
               
            </div>
        )
    }

}

export default Profile;