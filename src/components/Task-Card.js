import React from 'react';
import './Task-Card.css';

function TaskCard(props){
    return (
        <div className="task-card">
        <div className={'board-tile'}>
       <div className={'board-tile-content-container'}>
        <div className={'board-tile-content'}>
          <div className={'id-title-container'}>{props.data.taskTitle}
          </div>
          <div>
              <img src={props.data.image} alt="sampleImage" 
              style={{width: '100%', height: '200px'}}></img>
          </div>
          <div className={'board-tile-annotations'}>
            <div className={'badge'}>checklist icon</div>
            <div className={'badge'}>checklist icon</div>
            <div className="user-badge"> 
            {props.data.users ?
                props.data.users.map((user, index)=>{
                return (
                    <img  key={user.userId} className={'badge'} 
                            src={user.userImage} 
                            alt={user.userName}
                            title={user.userName}/>
                )
            }) : null
            }
            </div>
          </div>
        </div>
       </div>
      </div>
        </div>
    )
}

export default TaskCard;