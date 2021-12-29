import { useState } from 'react';
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {editRoute} from '../../store/route';
import MapContainer from "../Maps";
import '../../../src/index.css'
import RouteDeleteModal from "../RouteDeleteModal";
import CommentCreateModal from '../CommentCreateModal';
import CommentEditModal from "../CommentEditModal";
import CommentDeleteModal from '../CommentDeleteModal';

export default function RouteEditForm() {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);
    const [activity_id, setActivityId] = useState(1);
    const history = useHistory();
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id);
    const sessionUser = useSelector(state => state.session.user);
    const friendSession = useSelector(state => state.friends);
    const {pathname} = history.location
    let routeId = pathname.split('/')[2]
    const route = useSelector(state => state.routes[routeId])
    let currentRouteComments = useSelector(state => Object.values(state?.comments))

    const validator = () => {
      let error = []
      if(name.length > 80) {
          error.push('. : Please enter a route title shorter than 80 characters.')
      }
      if(description.length > 2000) {
          error.push('. : Descriptions cannot exceed 2000 characters.')
      } else if(description.length < 4) {
          error.push('. : Please enter a description longer than 4 characters.')
      }
      return error;
    }

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
            activity_id: Number(activity_id)
          };
          console.log(payload, 'test')
          const data = await dispatch(editRoute(payload));
          if(data) {
            setErrors(data)
          } else {
            history.push(`/routes/${routeId}`)
          }
        }
      };

      let commentss = currentRouteComments?.map((comment) =>
      <>
          {/* <span className="fa fa-ellipsis-v" onClick={null}>
            <div className="comment-dropdown">
              <CommentDeleteModal commentId={comment?.id} routeId={routeId}/>
            </div>
          </span> */}
          {comment?.content}
          {sessionUser?.id === route?.user_id && (
          <>
          <CommentEditModal commentId={comment?.id} routeId={routeId}/>
          <CommentDeleteModal commentId={comment?.id} routeId={routeId}/>
          </>)}
          {comment?.user_id === sessionUser.id && sessionUser?.id !== route?.user_id && (
          <>
          <CommentEditModal commentId={comment?.id} routeId={routeId}/>
          <CommentDeleteModal commentId={comment?.id} routeId={routeId}/>
          </>)}
      </>
      )

      const activities = ['Walk',
      'Run',
      'Hike',
      'Sport / Other Activity',
      'Winter Sport / Activity',
      'Bike Ride',
      'Social',
      'Volunteer',
      'Food']

    return (
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
                    onChange={e => setName(e.target.value)}/>
                  <input
                      className='routesDescription'
                      placeholder='Description'
                      required
                      value={description}
                      onChange= {(e) => setDescription(e.target.value)}/>
                  <select className='activityDropdownMenu' onChange={(e) => setActivityId(e.target.value)}>
                      <option value={1}>{activities[0]}</option>
                      <option value={2}>{activities[1]}</option>
                      <option value={3}>{activities[2]}</option>
                      <option value={4}>{activities[3]}</option>
                      <option value={5}>{activities[4]}</option>
                      <option value={6}>{activities[5]}</option>
                      <option value={7}>{activities[6]}</option>
                      <option value={8}>{activities[7]}</option>
                      <option value={9}>{activities[8]}</option>
                  </select>
                  <button type='editRouteBtn'>Edit route</button>
                </form>
                  <RouteDeleteModal routeId={routeId}/>
                  <CommentCreateModal routeId={routeId}/>
                <div className="commentInfoDiv">
                    {commentss}
                    {route?.user_id in friendSession &&
                    (<CommentCreateModal routeId={routeId}/>)}
                </div>
            </div>
          </div>

      );
}
