import { useEffect, useState } from 'react';
import { Modal } from '../Context/Modal';
import {useHistory, useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {getAllNonUserUsers} from '../../store/user'
import {editRoute, getAllRoutes, getOneRoute} from '../../store/route';
import { getAllRouteComments } from "../../store/comment";
import MapContainer from "../Maps";
import '../../../src/index.css'

export default function RouteEditForm() {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false)
  const {pathname} = history.location
  const routeId = pathname.split('/')[2]
  const route = useSelector(state => state.routes[routeId])
  const [name, setName] = useState(route?.name);
  const [errors, setErrors] = useState([]);
  const [activity_id, setActivityId] = useState(route?.activity_id ? route?.activity_id : '');
  const [description, setDescription] = useState(route?.description ? route?.description : '');
  const dispatch = useDispatch();
  // const {userId} = useParams();
  const user_id = useSelector(state => state.session.user?.id);
  const sessionUser = useSelector(state => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false)
  // const friendSession = useSelector(state => state.friends);
  let routeActivityId = useSelector(state => Object.values(state.routes)[0]?.activity_id)
  let currentRouteComments = useSelector(state => Object.values(state?.comments))
  // let routeDescription = useSelector(state => Object.values(state.routes)[0]?.description)
  // let routeName = useSelector(state => Object.values(state.routes)[0]?.name)

  const validator = () => {
    let error = []
    if(name.length > 81) {
        error.push('. : Please enter a route title shorter than 80 characters.')
    }
    if(name.length < 4) {
      error.push('. : Please enter a route title longer than 3 characters.')
    }
    if(description.length > 2000) {
        error.push('. : Descriptions cannot exceed 2000 characters.')
    } else if(description.length < 4) {
        error.push('. : Please enter a description longer than 3 characters.')
    }
    return error;
  }

  useEffect(() => {
    (async () => {
        await dispatch(getOneRoute(routeId));
        await dispatch(getAllRouteComments(routeId));
        await setActivityId(route?.activity_id);
        await setDescription(route?.description)
        await setName(route?.name)
        await dispatch(getAllNonUserUsers(sessionUser?.id));
        setIsLoaded(true)
    })();
}, [dispatch, route?.name, routeId, route?.description, route?.activity_id])

  const handleSubmit = async (e) => {
      e.preventDefault();
      const errorsArr = validator()
      if(errorsArr.length) {
          setErrors(errorsArr)
      } else{
        const payload = {
          id: routeId,
          name,
          description,
          user_id,
          activity_id
        };
        const data = await dispatch(editRoute(payload));
        if(data) {
          setErrors(data)
        } else {
          history.push(`/routes/${routeId}`)
        }
      }
      setIsLoaded(true)
    };

    const handleCancel = async (e) => {
      await e.preventDefault();
      await history.push(`/routes/${routeId}`);
    }

    const handleCancell = (e) => {
      e.preventDefault();
      setShowModal(false);
    }

    let event = new Date(route?.created_at);
    let date = event.toLocaleDateString().slice(0,5) + event.toLocaleDateString().slice(7,9)
    const allUsersList = useSelector(state => Object.values(state.users))
    const demoUser = {id: 1, first_name: "Demo"}
    allUsersList.unshift(demoUser)

    let commentss = currentRouteComments?.map((comment) =>
    <>
      <div className="editFormCommentsView">
        <div className='commentContentt'>
          {comment?.content}
          <div className="commentAuthor">{allUsersList[comment?.user_id - 1]?.first_name} {date}</div>
        </div>
      </div>
    </>
    )

    const activitiesAndIds = [[1, 'Walk'], [2, "Run"], [3, 'Hike'], [4, 'Sport / Other Activity'],
    [5, 'Winter Sport / Activity'], [6, 'Bike Ride'], [7, 'Social'], [8, 'Volunteer'], [9, 'Food']]

    return (<> {isLoaded && (
          <div className='routePage'>
            <div className="map"><MapContainer className="map"/></div>
            <div className='routeInfoDiv'>
                <form className="routeText" onSubmit={handleSubmit}>
                  <b>Name</b>
                  <input
                    type='text'
                    placeholder='Route Name'
                    value={name}
                    className="routesName"
                    onChange={e => setName(e.target.value)}/>
                  <b>Activity</b>
                  <select className='activityDropdownMenu' required value={activity_id} onChange={(e) => setActivityId(e.target.value)}>
                      <option value={activitiesAndIds[0][0]}>{activitiesAndIds[0][1]}</option>
                      <option value={activitiesAndIds[1][0]}>{activitiesAndIds[1][1]}</option>
                      <option value={activitiesAndIds[2][0]}>{activitiesAndIds[2][1]}</option>
                      <option value={activitiesAndIds[3][0]}>{activitiesAndIds[3][1]}</option>
                      <option value={activitiesAndIds[4][0]}>{activitiesAndIds[4][1]}</option>
                      <option value={activitiesAndIds[5][0]}>{activitiesAndIds[5][1]}</option>
                      <option value={activitiesAndIds[6][0]}>{activitiesAndIds[6][1]}</option>
                      <option value={activitiesAndIds[7][0]}>{activitiesAndIds[7][1]}</option>
                      <option value={activitiesAndIds[8][0]}>{activitiesAndIds[8][1]}</option>
                  </select>
                  <b>Description</b>
                  <textarea
                    className='routesDescription'
                    placeholder="Route Description"
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}/>
                    <div className="yesNCanelBtnsWrap">
                      <button type="submit" id='friendUnfriendConfirmBtn4'>Update</button>
                    </div>
                </form>
                <div className="yesNCanelBtnsWrap3">
                      <button type="submit" onClick={() => setShowModal(true)} id="friendUnfriendConfirmBtn4">Cancel</button>
                          {isLoaded && showModal && (
                              <Modal onClose={() => setShowModal(false)}>
                              <div className="deleteModal2">
                                  <div className="formModal">
                                  <p>Cancel this update?</p>
                                  <div className="yesNCanelBtnsWrap2">
                                  <button type="submit" onClick={handleCancel} id="friendUnfriendConfirmBtn2">Yes</button>
                                  <button type="submit" onClick={handleCancell} id="friendUnfriendConfirmBtn2">No</button>
                                  </div>
                                  </div>
                              </div>
                              </Modal>
                          )}
                  </div>
                    <div className="errors2">
                      {errors.map((error, idx) => (
                      <div key={idx}>{error.split(':')[1]}</div>
                  ))}
                  </div>
                <div id='commentLabel2'>Comments</div>
                <div className="commentInfoDiv">{commentss}</div>
            </div>
          </div>
          )}
        </>
      );
}
