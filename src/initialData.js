// import React from 'react';
import SampleImage1 from './assets/sample-image-1.jpg';
import SampleImage2 from './assets/sample-image-2.jpg';
import SampleImage3 from './assets/sample-image-3.jpg';
import UserImage from './assets/user-icon.jpg';

// const TaskManagerContext = React.createContext();


const initialData = () => {
    let data = {
        list: [
            {
                groupId: 'toDo',
                currentStatus: 'To Do',
                tasks: [{
                    taskId: 'task-0',
                    taskTitle: 'Sample Todo',
                    currentStatus: 'toDo',
                    taskDescription: 'This is a sample task',
                    taskUserId: 'Sid',
                    status:'high',
                    image: SampleImage1,
                    createdOn: "",
                    users:[
                        {   userId: 'user-0',
                            userName:'Sid',
                            userImage: UserImage
                        },
                        {   userId: 'user-1',
                            userName:'Jake',
                            userImage: UserImage
                        },
                        {   userId: 'user-2',
                            userName:'Emma',
                            userImage: UserImage
                        }
                    ]
                },
                {
                    taskId: 'task-1',
                    taskTitle: 'First Todo',
                    currentStatus: 'toDo',
                    taskDescription: 'This is another sample task',
                    taskUserId: 'Sid',
                    status:'medium',
                    image: SampleImage2,
                    createdOn: ""
                },
                {
                    taskId: 'task-2',
                    taskTitle: 'Second Todo',
                    currentStatus: 'toDo',
                    taskDescription: 'This is a sample task',
                    taskUserId: 'Sid',
                    status:'normal',
                    image: SampleImage3,
                    createdOn: ""
                },{
                    taskId: 'task-3',
                    taskTitle: 'Third Todo',
                    currentStatus: 'toDo',
                    taskDescription: 'This is another sample task',
                    taskUserId: 'Sid',
                    status:'high',
                    image: SampleImage1,
                    createdOn: ""

                },{
                    taskId: 'task-4',
                    taskTitle: 'Fourth Todo',
                    currentStatus: 'toDo',
                    taskDescription: 'This is a sample task',
                    taskUserId: 'Sid',
                    status:'normal',
                    image: SampleImage1,
                    createdOn: ""

                },
                {
                    taskId: 'task-5',
                    currentStatus: 'toDo',
                    taskTitle: 'Fifth Todo',
                    taskDescription: 'This is another sample task',
                    taskUserId: 'Sid',
                    status:'medium',
                    image: SampleImage1,
                    createdOn: "",


                },]
            },
            {
                groupId: 'inProgress',
                currentStatus: 'In progress',
                tasks: []
            },
            {
                groupId: 'inReview',
                currentStatus: 'In review',
                tasks: []
            },
            {
                groupId: 'done',
                currentStatus: 'Done',
                tasks: []
            }]
    }

    return function (index){
        // let group = name;

        return data.list[index];
    }
}

export default initialData;