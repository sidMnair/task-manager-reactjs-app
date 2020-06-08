// import React from 'react';
import SampleImage1 from '../assets/sample-image-1.jpg';
import SampleImage2 from '../assets/sample-image-2.jpg';
import SampleImage3 from '../assets/sample-image-3.jpg';
import UserImage from '../assets/user-icon.jpg';

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
                    status: 'High',
                    image: SampleImage1,
                    endDate: "2020-06-20",
                    users: [
                        {
                            userId: 'user-0',
                            userName: 'Sid',
                            userImage: UserImage
                        },
                        {
                            userId: 'user-1',
                            userName: 'Mahesh',
                            userImage: "./broken-image.jpg"
                        }
                    ]
                },
                {
                    taskId: 'task-1',
                    taskTitle: 'First Todo',
                    currentStatus: 'toDo',
                    taskDescription: 'This is another sample task',
                    taskUserId: 'Sid',
                    status: 'High',
                    image: SampleImage2,
                    endDate: "2020-06-15",
                    users: [{
                        userId: 'user-0',
                        userName: 'Mahesh',
                        userImage: "./broken-image.jpg"
                    }]
                },
                {
                    taskId: 'task-2',
                    taskTitle: 'Second Todo',
                    currentStatus: 'toDo',
                    taskDescription: 'This is a sample task',
                    taskUserId: 'Sid',
                    status: 'Medium',
                    image: SampleImage3,
                    endDate: "2020-08-10",
                    users: [{
                        userId: 'user-0',
                        userName: 'Basil',
                        userImage: "./broken-image.jpg"
                    }]
                }, {
                    taskId: 'task-3',
                    taskTitle: 'Third Todo',
                    currentStatus: 'toDo',
                    taskDescription: 'This is another sample task',
                    taskUserId: 'Sid',
                    status: 'High',
                    image: SampleImage1,
                    endDate: "2020-07-01",
                    users: [{
                        userId: 'user-0',
                        userName: 'Sachin',
                        userImage: "./broken-image.jpg"
                    }]

                }, {
                    taskId: 'task-4',
                    taskTitle: 'Fourth Todo',
                    currentStatus: 'toDo',
                    taskDescription: 'This is a sample task',
                    taskUserId: 'Sid',
                    status: 'Medium',
                    image: SampleImage1,
                    endDate: "2020-09-10",
                    users: [{
                        userId: 'user-0',
                        userName: 'Sid',
                        userImage: "./broken-image.jpg"
                    }]

                },
                {
                    taskId: 'task-5',
                    currentStatus: 'toDo',
                    taskTitle: 'Fifth Todo',
                    taskDescription: 'This is another sample task',
                    taskUserId: 'Sid',
                    status: 'Low',
                    image: SampleImage1,
                    endDate: "2020-12-10",
                    users: [{
                        userId: 'user-0',
                        userName: 'Mahesh',
                        userImage: "./broken-image.jpg"
                    }]


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

    return function (index) {
        // let group = name;

        return data.list[index];
    }
}

export default initialData;