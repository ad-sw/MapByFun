import { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {editRoute, getAllRoutes, getOneRoute} from '../../store/route';
import { getAllRouteComments } from "../../store/comment";
import MapContainer from "../Maps";
import '../../../src/index.css'

export default function RouteEditForm() {
    const history = useHistory();
    const {pathname} = history.location
    const routeId = pathname.split('/')[2]
    const route = useSelector(state => state.routes[routeId])
    const [name, setName] = useState(route?.name);
    const [errors, setErrors] = useState([]);
    const [activity_id, setActivityId] = useState(route?.activity_id);
    const [description, setDescription] = useState(route?.description);
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id);
    const sessionUser = useSelector(state => state.session.user);
    const [isLoaded, setIsLoaded] = useState(false)
    const friendSession = useSelector(state => state.friends);

    let currentRouteComments = useSelector(state => Object.values(state?.comments))

    const validator = () => {
      let error = []
      if(name.length > 80) {
          error.push('. : Please enter a route title shorter than 80 characters.')
      }
      if(name.length < 3) {
        error.push('. : Please enter a route title longer than three characters.')
    }
      if(description.length > 8000) {
          error.push('. : Descriptions cannot exceed 2000 characters.')
      } else if(description.length < 4) {
          error.push('. : Please enter a description longer than four characters.')
      }
      return error;
    }

    useEffect(() => {
      (async () => {
          await dispatch(getOneRoute(routeId));
          await dispatch(getAllRouteComments(routeId));
          setIsLoaded(true)
      })();
  }, [dispatch, sessionUser, routeId])

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
            activity_id: +activity_id
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

      let commentss = currentRouteComments?.map((comment) =>
      <>
        <div className="commentInfoDiv">{comment?.content}</div>
      </>
      )

      const activitiesAndIds = [[1, 'Walk'], [2, "Run"], [3, 'Hike'], [4, 'Sport / Other Activity'],
      [5, 'Winter Sport / Activity'], [6, 'Bike Ride'], [7, 'Social'], [8, 'Volunteer'], [9, 'Food']]

    return (<> {isLoaded && (
          <div className='testttt'>
            <div className="map"><MapContainer/></div>
            <div className='routeInfoDiv'>
                <div className="errors">
                    {errors.map((error, idx) => (
                    <div key={idx}>{error.split(':')[1]}</div>
                ))}
                </div>
                <form className="routeText" onSubmit={handleSubmit}>
                  <input
                    type='text'
                    placeholder='Name'
                    value={name}
                    className="routesName"
                    onChange={e => setName(e.target.value)}/>
                  <select className='activityDropdownMenu' /*value={route.activity_id}*/ onChange={(e) => setActivityId(e.target.value)}>
                      <option value={activitiesAndIds[0][0]} onClick={activitiesAndIds[0][0]}>{activitiesAndIds[0][1]}</option>
                      <option value={activitiesAndIds[1][0]}>{activitiesAndIds[1][1]}</option>
                      <option value={activitiesAndIds[2][0]}>{activitiesAndIds[2][1]}</option>
                      <option value={activitiesAndIds[3][0]}>{activitiesAndIds[3][1]}</option>
                      <option value={activitiesAndIds[4][0]}>{activitiesAndIds[4][1]}</option>
                      <option value={activitiesAndIds[5][0]}>{activitiesAndIds[5][1]}</option>
                      <option value={activitiesAndIds[6][0]}>{activitiesAndIds[6][1]}</option>
                      <option value={activitiesAndIds[7][0]}>{activitiesAndIds[7][1]}</option>
                      <option value={activitiesAndIds[8][0]}>{activitiesAndIds[8][1]}</option>
                  </select>
                  <textarea
                    className='routesDescription'
                    placeholder="Description"
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}/>
                  <button id='friendUnfriendConfirmBtn'>Edit route</button>
                </form>
                <div className="commentInfoDiv">{commentss}</div>
            </div>
          </div>
          )}
        </>
      );
}
