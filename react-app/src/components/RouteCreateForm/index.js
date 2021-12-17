import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { createRoute } from '../../store/route'
import './RouteCreateForm.css'

const RouteForm = () => {
    const history = useHistory()
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [activity_id, setActivityId] = useState(1);
    // const [user_id, setUserId] = useState(1);
    const [errors, setErrors] = useState([])

    const user_id = useSelector(state => state.session.user.id);
    const dispatch = useDispatch();

    const validator = () => {
        let error = []

        if(name.length > 80) {
            error.push('. : Please enter a title shorter than 80 characters.')
        }

        if(description.length > 2000) {
            error.push('. : Descriptions cannot exceed 2000 characters.')
        } else if(description.length < 10) {
            error.push('. : Please enter a longer description past 10 characters.')
        }

        return error;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errorsArr = validator()
        if(errorsArr.length) {
            setErrors(errorsArr)
        } else{
            const route_info = {
                user_id,
                activity_id,
                name,
                description,
            }
            const data = await dispatch(createRoute(route_info))
            if(data) {
                setErrors(data)
            } else {
                history.push('/routes')
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
        <>
            <div className="page-header">
                New Route
            </div>
            <div className='route-form-container'>
                <div className="errors">
                    {errors.map((error, ind) => (
                    <div key={ind}>{error.split(':')[1]}</div>
                ))}
                </div>
                <form className='route-form' onSubmit={handleSubmit}>
                    <input
                    className='route-name-input'
                    placeholder='Name'
                    required
                    value = {name}
                    onChange= {(e) => setName(e.target.value)}/>
                    <input
                    className='route-description-input'
                    placeholder='Description'
                    required
                    onChange= {(e) => setDescription(e.target.value)}/>
                    <select className='activity-dropdown-menu'
                    onChange={(e) => setActivityId(e.target.value)}>
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
                    <button className="route-submit-button">Submit</button>
                </form>
            </div>
        </>
    )
}

export default RouteForm;
