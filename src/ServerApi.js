import {getToken} from './Storage'

const _url='https://www.share-it-up.com';
function request(url,method,token,body){
    const headers=new Headers({
        'Content-Type':'application/json',
        
    })
    if(token){
        headers.set('Authorization',`Token ${getToken()}`)
    }

    return fetch(url,{
        method,
        headers,
        body: body? JSON.stringify(body):undefined
    }).then((res)=>res.json())

}

export function login(obj){
    let url=`${_url}/api/users/login`;
    return request(url,'POST',false,obj)
}

export function getUserDetails(){
    let url=`${_url}/api/users`;
    return request(url,'GET',true)
}

export function getFriendsRequest(){
    let url=`${_url}/api/users/friends/`;
    return request(url,'GET',true)
}