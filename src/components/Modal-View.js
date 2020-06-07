import React, {useState} from 'react';
import {connect} from 'react-redux';
import './Modal-View.css';

function ModalView(props){

    const [title, setTitle] = useState('New Task');
    const [description, setDescription] = useState('');
    const [user, setUser] = useState('Sid');

    const usersList = [{ id:0,name:'Sid'}, 
                        { id:1,name:'Max'}, 
                        { id:2,name:'Jake'}, 
                        { id:3,name:'Rex'}, 
                        { id:4,name:'Emma'}, 
                        { id:5,name:'Sophia'}]


    const onEnterTitleHandler = (event) =>{
        setTitle(event.target.value);
        
    }

    const onDescriptionHandler = (event) =>{
        setDescription(event.target.value);

        console.log(title);
    }

    const onSubmitForm = (event) =>{
        console.log('On Submit');
        // let toDoTasks = this.props.tasks.lists;

        const task = { 
            taskId: 'task-7',
            taskTitle: title,
            currentStatus: 'toDo',
            taskDescription: description,
            taskUserId: user,
            status:'high',
            image: "",
            createdOn: "",
            users:[
                    {   userId: 'user-0',
                        userName:user,
                        userImage: ""
                    }
            ]
        }

        console.log(task);
        props.onAddTasks(task);

        onCloseModalhandler();

    }

    const onUserSelectHandler = (event) =>{
        setUser(event.target.value);

    }

    const onCloseModalhandler = (event) =>{
        console.log('closed');
        props.closeModal();
    }

    

    return (
        <div className="modal-view">
            <div className="background-layout" onClick={onCloseModalhandler}></div>
            <div className="modal-container">
                <div className="modal-header">
                    <h3>Add a task</h3>
                    <button className="close-btn" onClick={props.closeModal}>x</button>
                </div>
                <div className="modal-body" >
                    <div className="row">
                        <div><p>Title</p></div>
                        <input type="text" name="task-title" value={title} onChange={onEnterTitleHandler}/>
                    </div>
                    <div className="row">
                    <div><p>Description</p></div>
                    <textarea name="task-description" value={description} onChange={onDescriptionHandler}/>
                    </div>
                    <div className="row">
                    <div><p>Assign User</p></div>
                        <select onChange={onUserSelectHandler}>
                            <option value="0">Select User</option>
                            {usersList.map((user, index)=>{
                                return (
                                    <option key={user.id} 
                                            value={user.name} 
                                            >{user.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    
                    <div className="row">
                    <button className="button" type="submit" onClick={onSubmitForm}>Create New Task</button>
                    </div>
                    <div className="row"></div>
                </div>
            </div>
        </div>
    );
}

// const mapStateToProps = (state) =>{
//     return {
//         tasks: state.toDo
//     }
// }

const mapDispatchToProps = (dispatch) =>{
    return {
        onAddTasks : (newTask) => dispatch({type: 'ADD_NEW_TASK', newTask: newTask})
    }
}

export default connect(null, mapDispatchToProps)(ModalView);