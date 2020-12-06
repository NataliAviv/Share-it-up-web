
import {getFriendsRequest, getUserDetails} from './ServerApi';
import { setUserDb } from './Components/DataBase/UserDetailsDb';
import { setFriendsDb } from './Components/DataBase/FriendsDetailsDb';

export async function appAmount(){
    const friends=await getFriendsRequest();
    const user=await getUserDetails();
    setUserDb(user.user[0]);
    console.log(user.user[0]);

    setFriendsDb(friends);
    
}