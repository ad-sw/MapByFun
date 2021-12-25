import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { createRoute } from '../../store/route'
import './RouteCreateForm.css'

const RouteCreateForm = () => {
    const history = useHistory()
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [activity_id, setActivityId] = useState(1);
    const [activity, setActivity] = useState('');
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id);

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
                activity_id,
                activity
            }
            const data = await dispatch(createRoute(payload))
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
            <div className="routeHeader">
                New Route
            </div>
            <div className='routeFormContainer'>
                <div className="errors">
                    {errors.map((error, idx) => (
                    <div key={idx}>{error.split(':')[1]}</div>
                ))}
                </div>
                <form className='routeForm' onSubmit={handleCreate}>
                    <input
                    className='routeNameInput'
                    placeholder='Name'
                    required
                    value = {name}
                    onChange= {(e) => setName(e.target.value)}/>
                    <input
                    className='routeDescriptionInput'
                    placeholder='Description'
                    required
                    onChange= {(e) => setDescription(e.target.value)}/>
                    {/* <select
                    >
                        <option value={1}>{activities[0]}</option>
                        <option value={2}>{activities[1]}</option>
                        <option value={3}>{activities[2]}</option>
                        <option value={4}>{activities[3]}</option>
                        <option value={5}>{activities[4]}</option>
                        <option value={6}>{activities[5]}</option>
                        <option value={7}>{activities[6]}</option>
                        <option value={8}>{activities[7]}</option>
                        <option value={9}>{activities[8]}</option>
                    </select> */}
                    <select className='activityDropdownMenu' onChange={(e) => setActivity(e.target.value)}>
                        <option value={'one'}>{activities[0]}</option>
                        <option value={'two'}>{activities[1]}</option>
                        <option value={'three'}>{activities[2]}</option>
                    </select>
                    <button className="routeSubmitButton">Submit</button>
                </form>
            </div>
        </>
    )
}

export default RouteCreateForm;
