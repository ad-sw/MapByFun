import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFriend } from '../store/friend';

function UsersList() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
      setIsLoaded(true)
    }
    fetchData();
  }, []);

  const userFriends = Object.values(sessionUser.friends).map(friends => {
    return friends.id;
  })
  console.log(userFriends, 'user friends after map')

  const userComponents = users.map((user) => {
    // let test = []
    // for (let i = 0; i < userFriends.length; i++) {
    //   if (sessionUser.id !== user.id && userFriends[i] !== user.id ) {
    //     test.push(user.id)
    //   }
    // }
    // console.log(test, 'twst')

    return (<>{sessionUser.id !== user.id && (
      <div>
        {/* {console.log(user, 'hiiiii')} */}
        <NavLink to={`/users/${user.id}`}>{user.first_name} {user.last_name}</NavLink>
        {/* <button onClick={handleAdd}>Add</button>
        <button>Unfriend</button> */}
      </div>
      )}
    </>
);
  });

  return (<> {isLoaded && (
              <div>
                <h1>Find Friends: </h1>
                <p>{userComponents}</p>
              </div>
              )}
          </>
  );
}

export default UsersList;

// function UsersList() {
//   const [users, setUsers] = useState([]);
//   const dispatch = useDispatch()
//   const [isLoaded, setIsLoaded] = useState(false)
//   const sessionUser = useSelector(state => state.session.user)
//   console.log(useSelector(state => state), 'this is state')

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch('/api/users/');
//       const responseData = await response.json();
//       setUsers(responseData.users);
//       setIsLoaded(true)
//     }
//     fetchData();
//   }, []);

//   //ppl is that user is friends with
//   const userFriends = Object.values(sessionUser.friends).map(friends => {
//     return friends.id;
//   })


//   const userComponents = users.map((user) => {
//     let test = [];
//     let test2 = []
//     for (let i = 0; i < 4; i++) {
//       test2.push(users)
//     }

//     for (let i = 0; i < userFriends.length; i++) {
//       const ele = userFriends[i];
//       if (sessionUser.id !== user.id && ele !== user.id && ele[i] ) {
//         console.log(user.id, 'this is the userid')
//           test.push(user.id)
//       }
//       console.log(test, 'testing')
//       return test;
//     }

//     return (<>{ sessionUser.id !== user.id && (
//               <div>
//                 {/* {console.log(user, 'hiiiii')} */}
//                 <NavLink to={`/users/${user.id}`}>{user.first_name} {user.last_name}</NavLink>
//                 {/* <button onClick={handleAdd}>Add</button>
//                 <button>Unfriend</button> */}
//               </div>
//               )}
//             </>
//     );
//   });

//   return (<> {isLoaded && (
//               <div>
//                 <h1>Find Friends: </h1>
//                 <p>{userComponents}</p>
//               </div>
//               )}
//           </>
//   );
// }

// export default UsersList;

// const userComponents = users.map((user) => {
//   let test = []
//   let trying = null;
//   for (let i = 0; i < userFriends.length; i++) {
//     if (sessionUser.id !== user.id && userFriends[i] !== user.id ) {
//       console.log(user.id, 'is there')
//       test.push(user.id)
//     }
//   }
//   console.log(test, 'test of non-friends')

//   for (let i = 0; i < test.length; i++) {
//     if (test[i]) {
//       trying =
//       <>{console.log(test[i], 'test i')}
//       <div><NavLink to={`/users/${user.test[i]}`}>{user.first_name} {user.last_name}</NavLink></div></>
//     }
//   }

//   return trying;
// //     return (<>{sessionUser.id !== user.id && (
// //       <div>
// //         {console.log(user, 'hiiiii')}
// //         <NavLink to={`/users/${user.id}`}>{user.first_name} {user.last_name}</NavLink>
// //         {/* <button onClick={handleAdd}>Add</button>
// //         <button>Unfriend</button> */}
// //       </div>
// //       )}
// //     </>
// // );
// });
