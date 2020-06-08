import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import ModalDialog from '../components/UI/Modal-Dialog';
import CustomForm from '../components/UI/Custom-Form';

const AddTask = (props) => {
    const [filterInput, setFilterinput] = useReducer((state, newState) => ({ ...state, ...newState }), {
        title: "Default New Task Title",
        type: "New Task",
        description: "Default Task Description",
        priority: "Low",
        dueDate: "",
        selectedUsers: []
    })

    const menuItems = [
        { id: 0, type: "Issue" },
        { id: 1, type: "Asset" },
        { id: 2, type: "Bug" },
        { id: 3, type: "New Task" },
        { id: 4, type: "Link" },
        { id: 5, type: "Story" },
        { id: 6, type: "Epic" },
        { id: 7, type: "Feature" },
        { id: 8, type: "Test Case" }
    ];

    const priorities = [
        { id: 0, type: 'Low' },
        { id: 1, type: 'Medium' },
        { id: 2, type: 'High' }
    ];

    const userList = [
        { id: 0, name: 'Sid', img: '' },
        { id: 1, name: 'Mahesh', img: '' },
        { id: 2, name: 'Basil', img: '' },
        { id: 3, name: 'Sachin', img: '' }];

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    }

    const onChangeHandler = (event) => {
        setFilterinput({ [event.target.name]: event.target.value })
    };

    const onClearData = () => {
        setFilterinput({
            title: "Default New Task Title",
            type: "New Task",
            description: "Default Task Description",
            priority: "Low",
            dueDate: "",
            selectedUsers: []
        })

    }

    const onAddNewTask = () => {
        console.log('data', filterInput)
        const users = [];
        for (let i = 0; i < filterInput.selectedUsers.length; i++) {
            let userObj = {
                userId: `user-${i}`,
                userName: filterInput.selectedUsers[i],
                userImage: "./broken-image.jpg"

            }
            users.push(userObj);
        }

        const currentIndex = props.currentTaskCount + 1;
        const newTask = {
            taskId: `task-${currentIndex}`,
            taskTitle: filterInput.title,
            currentStatus: 'toDo',
            taskDescription: filterInput.description,
            taskUserId: filterInput.user,
            status: filterInput.priority,
            image: "",
            endDate: filterInput.dueDate,
            users: users
        }

        props.onAddTasks(newTask);

        props.closeModal();
    };

    const onCloseModal = (event) => {
        onClearData();
        props.closeModal();
    }

    return (
        <ModalDialog filterInput={filterInput}
            setFilterinput={setFilterinput}
            menuItems={menuItems}
            priorities={priorities}
            userList={userList}
            changed={onChangeHandler}
            addTask={onAddNewTask}
            itemHeight={ITEM_HEIGHT}
            itemPaddingTop={ITEM_PADDING_TOP}
            menuProps={MenuProps}
            openModal={props.showModal}
            closeModal={onCloseModal}
        >
            <CustomForm filterInput={filterInput}
                setFilterinput={setFilterinput}
                menuItems={menuItems}
                priorities={priorities}
                userList={userList}
                changed={onChangeHandler}
                addTask={onAddNewTask}
                itemHeight={ITEM_HEIGHT}
                itemPaddingTop={ITEM_PADDING_TOP}
                menuProps={MenuProps}>
            </CustomForm>
        </ModalDialog>
    )
}

const mapStateToProps = (state) => {
    return {
        currentTaskCount: state.totalTasksCreated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTasks: (newTask) => dispatch({ type: 'ADD_NEW_TASK', newTask: newTask })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);