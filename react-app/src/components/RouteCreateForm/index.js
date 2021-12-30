import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { createRoute } from '../../store/route'
import '../../../src/index.css'
import MapContainer from "../Maps";

const RouteCreateForm = () => {
    const history = useHistory()
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [activity_id, setActivityId] = useState(1);
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id);

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
        <div className="routePage">
            <div className="map"><MapContainer/></div>
            <div className='routeInfoDiv'>
                <div className="errors">
                    {errors.map((error, idx) => (
                    <div key={idx}>{error.split(':')[1]}</div>
                ))}
                </div>
                <form className='routeText' onSubmit={handleCreate}>
                    <input
                    className='routesName'
                    placeholder='Name'
                    required
                    value= {name}
                    onChange= {(e) => setName(e.target.value)}/>
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
                    <textarea
                    className='routesDesc'
                    placeholder="Description"
                    required
                    onChange={(e) => setDescription(e.target.value)}/>
                    <button id="friendUnfriendConfirmBtn">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default RouteCreateForm;
