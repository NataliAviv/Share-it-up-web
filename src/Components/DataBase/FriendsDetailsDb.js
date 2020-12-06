let friendDetails={};
export function setFriendsDb(friendDetailsData){
    friendDetails=friendDetailsData.friends;
}

export function getFriendsDb(){
    return friendDetails;
}
