import React from 'react';
import './Task-Card.css';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBell, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import Moment from 'moment';

function TaskCard(props) {

  const deleteIconStyle = {
    display: 'inline-block',
    marginTop: '5px',
    marginRight: '2px',
    cursor: 'pointer'
  };

  const deleteTask = (event) => {
    props.clickDelete(props.data);
  }


  return (
    <div className="task-card">
      <div className={'board-tile'}>
        <div className={'board-tile-content-container'}>
          <div className={'board-tile-content'}>
            <div className={'id-title-container'}>
              <div>{props.data.taskTitle}</div>
              <FontAwesomeIcon icon={faTrashAlt} style={deleteIconStyle} onClick={deleteTask}></FontAwesomeIcon>
            </div>
            <div>
              {props.data.image ? <img src={props.data.image} alt="sampleImage"
                style={{ width: '100%', height: '200px' }}></img> : null}
            </div>
            <div className={'board-tile-annotations'}>
              <div className={'date-badge ' + (props.data.currentStatus === 'done' ? 'highLight' : 'light')} >
                {props.data.endDate ?
                  <React.Fragment>
                    {props.data.currentStatus === 'done' ?
                      <FontAwesomeIcon icon={faCheck} style={{ fontSize: '14px', marginRight: '7px', top: '4px' }} />
                      : <FontAwesomeIcon icon={faBell} style={{ fontSize: '14px', marginRight: '7px', top: '4px', color: '#bdbdbd' }} />

                    }
                    <span>{Moment(props.data.endDate).format('D MMM')}</span>
                  </React.Fragment> : null
                }
              </div>
              <div className="user-badge">
                <AvatarGroup max={2}>
                  {props.data.users ?
                    props.data.users.map((user, index) => {
                      return (

                        <Avatar key={user.userName} alt={user.userName} src={user.userImage} />

                      )
                    }) : null
                  }
                </AvatarGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard;