let userDetails={};
export function setUserDb(userDetailsData){
    userDetails=userDetailsData;
}

export function getUserName(){
    return userDetails.firstname + " " + userDetails.lastname;
}

export function getUserEmail(){
    return userDetails.email;
}

export function getUserImg(){
    return userDetails.pic;
}