import {
  getFriendsRequest,
  getUserRequest,
  getGroupsRequest
} from './ServerApi';
import { setUserDb } from './dataBase/UserDetailsDb';
import { setFriendsDb } from './dataBase/FriendsDetailsDb';
import { setGroupDb } from './dataBase/GroupDetailsDb';

export async function appAmount() {
  const groups = await getGroupsRequest();
  const friends = await getFriendsRequest();
  const user = await getUserRequest();
  setUserDb(user.user[0]);

  setFriendsDb(friends);
  setGroupDb(groups.groups);
}
