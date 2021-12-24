import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNonFriends} from  '../../store/friend';
import AddFriend from '../AddFriend';
import RemoveFriend from '../DeleteFriend';

export default function UserNonfriendsList() {
  const dispatch = useDispatch()
  const { userId }  = useParams();
  const [isLoaded, setIsLoaded] = useState(false)
  const [nonFriend, setNonFriend] = useState(false)

  useEffect(() => {
      (async () => {
          await dispatch(getAllNonFriends(userId));
          setIsLoaded(true)
      })();
  }, [dispatch, userId]);

  // const userList = useSelector(state => state.users)
  const sessionUser = useSelector(state => state.session.user)
  // console.log(sessionUser, 'huh')
  let nonFriendList = useSelector(state => state.nonFriends)
  let nonFriendsList = Object.values(nonFriendList)
  // let nonFriendssList = Object.values(nonFriendList)

  // // let testtt = Object.keys(nonFriendList)
  // nonFriendssList.filter(ele => ele !== sessionUser)
  // console.log(nonFriendssList, 'elp', sessionUser)
  // console.log(nonFriendList, 'idk')
  // // console.log(useSelector(state => state.session.user['friends']), 'friends array hopeful update')
  // let friendIdsT = useSelector(state => state.session.user['friends']) //[2,3] all user friend ids
  // let friendIdsTCopy = friendIdsT.slice();
  // // console.log(friendIdsTCopy, 'this is copy arry')
  // friendIdsTCopy.push(+userId)
  // let uniqueUserAndFriendIds = [...new Set(friendIdsTCopy)] //console.log(uniqueUsernFriendIds, 'all ids to filter out') //[1,2,3]
  // let allUserIdsNumbers = Object.keys(userList).map(function (x) {
  //   return parseInt(x);
  // });

  // allUserIdsNumbers.filter(x => !uniqueUserAndFriendIds.includes(x));

  // let nonFriendIds = allUserIdsNumbers.filter(x => !uniqueUserAndFriendIds.includes(x))
  //                   .concat(uniqueUserAndFriendIds.filter(x => !allUserIdsNumbers.includes(x))); //console.log(nonFriendIds, 'no idea') //[4]

  // let nonFriendsList = []

  // if (nonFriendIds.length > 0) {
  //   for (let i = 0; i < nonFriendIds.length; i++) {
  //   let ele = nonFriendIds[i];
  //   let nonFriend = userList[ele];
  //   nonFriendsList.push(nonFriend)
  // }}

  //-----------------------------------------------------------------------------------

  // const userComponents = nonFriendsList?.map(user => {
  //           return (<> {isLoaded && (
  //             <NavLink key={user?.id} to={`/users/${+userId}/friends/${user?.id}/routes`}>
  //               <div className="route-dash">
  //                 <div className="route-dash-info" >
  //                     <div>Name: {user?.first_name}&nbsp;{user?.last_name}</div>
  //                     <AddFriend friend_id={user?.id} user_id={+userId}/>
  //                 </div>
  //               </div>
  //             </NavLink>)}
  //         </>
  //       )
  // })

    const userComponents = nonFriendsList?.map(user => {
            if (user.id !== sessionUser.id) {
            return (<> {isLoaded && (
              <NavLink key={user?.id} to={`/users/${+userId}/friends/${user?.id}/routes`}>
                <div className="route-dash">
                  <div className="route-dash-info" >
                      <div>Name: {user?.first_name}&nbsp;{user?.last_name}</div>
                      <AddFriend friend_id={user?.id} user_id={+userId}/>
                  </div>
                </div>
              </NavLink>)}
          </>
        )
    }})
  return (<>
            <div>{userComponents}</div>
        </>
);
}
