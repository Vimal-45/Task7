import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import myPhoto from '../assets/photo.png'
import { useEffect } from 'react';
import { NoteAction } from '../Features/NoteApiAction';

const Sidebar = () => {
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(NoteAction())

  }, [])

  const value = useSelector((state) => state.noteAppReducer);
  const navigate = useNavigate();
  console.log(value);
  // console.log(value.user[0].name);

  return (
    <>
      <div className="sidebar">
        <div className="profile">
          <img
            src={myPhoto}
            alt="Vimal D"
          />
          <div>
            <h3>
              {value && value.user && value.user.length > 0 ? value.user[0].name : 'No user found'}
            </h3>
            <p>
              {value && value.user && value.user.length > 0 ? value.user[0].email : 'No email found'}
            </p>

          </div>
        </div>
        <ul className="nav-links">
          <li>

            <button
              onClick={() => {
                navigate('/')
              }}
              className="nav-button"
            ><i className="bi bi-house-door"></i>
              Home
            </button>
          </li>
          <li>

            <button
              onClick={() => navigate('/note')}
              className="nav-button"
            >
              <i className="bi bi-journal-text"></i> Note
            </button>
          </li>
          <li>

            <button
              onClick={() => navigate('/search')}
              className="nav-button"
            >
              <i className="bi bi-search"></i>  Search
            </button>
          </li>
          <li>

            <button
              onClick={() => navigate('/task')}
              className="nav-button"
            >
              <i className="bi bi-check2-circle"></i>Task
            </button>
          </li>
          <li>

            <button
              onClick={() => navigate('/archive')}
              className="nav-button"
            >
              <i className="bi bi-archive"></i>  Archive
            </button>
          </li>
          <li>

            <button
              onClick={() => navigate('/bin')}
              className="nav-button"
            >
              <i className="bi bi-trash"></i>  Bin
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
