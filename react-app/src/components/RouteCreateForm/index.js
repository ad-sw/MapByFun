import { useState, useEffect } from "react";
import { Modal } from '../Context/Modal';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { createRoute } from '../../store/route'
import '../../../src/index.css'
import MapContainer from "../Maps";

const RouteCreateForm = () => {
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [activity_id, setActivityId] = useState(1);
    const [errors, setErrors] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id);

    const validator = () => {
        let error = []
        if(name.length > 81) {
            error.push('. : Please enter a route title shorter than 80 characters.')
        }
        if(name.length < 4) {
            error.push('. : Please enter a route title longer than 3 characters.')
        }
        if(description.length > 2001) {
            error.push('. : Descriptions cannot exceed 2000 characters.')
        } else if(description.length < 4) {
            error.push('. : Please enter a description longer than 3 characters.')
        }
        return error;
    }

    useEffect(() => {
        (async () => {
            setIsLoaded(true)
        })();
    }, [sessionUser])

    const handleCreate = async (e) => {
        e.preventDefault();
        const errorsArr = validator()
        if(errorsArr.length) {
            setErrors(errorsArr)
        } else{
            const payload = {
                user_id,
                name,
                description,
                activity_id: +activity_id,
            }
            const data = await dispatch(createRoute(payload));
            if(data) {
                setErrors(data)
            } else {
                history.push(`/users/${user_id}/routes`)
            }
        }
    }

    const handleCancel = async (e) => {
        await e.preventDefault();
        await history.push(`/users/${user_id}/routes`);
    }

    const handleCancell = (e) => {
        e.preventDefault();
        setShowModal(false);
    }

      const activitiesAndIds = [[1, 'Walk'], [2, "Run"], [3, 'Hike'], [4, 'Sport / Other Activity'],
      [5, 'Winter Sport / Activity'], [6, 'Bike Ride'], [7, 'Social'], [8, 'Volunteer'], [9, 'Food']]

    return (<>{isLoaded && (
        <div className="routePage">
            <div className="map"><MapContainer className="map"/></div>
            <div className='routeInfoDiv'>
                <form className='routeText' onSubmit={handleCreate}>
                    <b>Name</b>
                    <input
                    className='routesName'
                    placeholder='Route Name'
                    required
                    value= {name}
                    onChange= {(e) => setName(e.target.value)}/>
                    <b>Activity</b>
                    <select required className='activityDropdownMenu' onChange={(e) => setActivityId(e.target.value)}>
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
                    required
                    onChange={(e) => setDescription(e.target.value)}/>
                    <div className="yesNCanelBtnsWrap">
                        <button id="friendUnfriendConfirmBtn4">Create</button>
                    </div>
                </form>
                <div className="yesNCanelBtnsWrap3">
                      <button type="submit" onClick={() => setShowModal(true)} id="friendUnfriendConfirmBtn4">Cancel</button>
                          {isLoaded && showModal && (
                              <Modal onClose={() => setShowModal(false)}>
                              <div className="deleteModal2">
                                  <div className="formModal">
                                  <p>Cancel this route?</p>
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
            </div>
        </div>
    )}</>)
}

export default RouteCreateForm;
