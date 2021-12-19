import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {editRoute} from '../../store/route';

function RouteEditForm({routes}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
          name,
          description,
          routes
        };

        await dispatch(editRoute(payload));
      };

    const handleClick = (e) => {
      handleSubmit(e);
    }

    return (
        <div className='routesTest'>
          <form className="formUpdate" onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
                className='routesDescription'
                placeholder='Description'
                required
                value={description}
                onChange= {(e) => setDescription(e.target.value)}/>
            <button type='submit' onClick={e => handleClick(e)}>Update route</button>
          </form>
        </div>
      );
}

export default RouteEditForm;
