import { useState } from 'react';
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {editRoute} from '../../store/route';

export default function RouteEditForm() {
    const [name, setName] = useState('');
    const history = useHistory()
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id);

    const {pathname} = history.location
    let editId = pathname.split('/')[2]

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
          id: editId,
          name,
          description,
          user_id
        };
        await dispatch(editRoute(payload)).then(history.push(`/routes/${editId}`));
      };

    return (<>
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
              <button type='submit'>Edit route</button>
            </form>
          </div>
        </>
      );
}
