import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as actionTypes from '../../store/action';
import TaskCard from '../../components/Task-Card/Task-Card';
import './DD-Container.css';


// a little function to help with reordering the result
const reorder = (group, startIndex, endIndex) => {
    let taskGrp = group;
    const result = Array.from(taskGrp.tasks);
    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);
    taskGrp.tasks = result;


    return taskGrp;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    let sourceGrp = source;
    let destinationGrp = destination;

    const sourceClone = Array.from(source.tasks);

    const destClone = Array.from(destination.tasks);

    const [removed] = sourceClone.splice(droppableSource.index, 1);
    removed.currentStatus = destinationGrp.groupId;
    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    sourceGrp.tasks = sourceClone;
    destinationGrp.tasks = destClone;

    result[sourceGrp.groupId] = sourceGrp;
    result[destinationGrp.groupId] = destinationGrp;

    return result;
};

const grid = 8;
const colorCode = {
    High: { id: 1, color: 'red' },
    Medium: { id: 2, color: 'orange' },
    Low: { id: 3, color: 'grey' }
}

const getItemStyle = (isDragging, draggableStyle, status) => {

    return ({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        // padding: 4,
        margin: `0 0 ${grid}px 0`,
        borderRadius: 5,
        boxShadow: '2px 1px 7px rgba(128,128,128,0.44)',
        backgroundColor: '#ffffff',
        borderLeft: `4px solid ${colorCode[status].color}`,
        outline: 'none',

        // change background colour if dragging
        tansform: isDragging ? 'scale(1.2)' : 'scale(1)',

        // styles we need to apply on draggables
        ...draggableStyle
    })
};

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'rgb(203, 219, 243)' : '#f3f5f7',
    padding: grid,
    minWidth: 250,
    minHeight: 500,
    boxShadow: '2px 1px 7px rgba(128,128,128,0.44)',
    boxSizing: 'border-box',
    borderRadius: 7,
    marginLeft: 8,
    marginRight: 8,

});


class DragDropComponent extends Component {

    getList = (id) => { return this.props.tasks[id] };

    onDragEnd = (result) => {
        const { source, destination } = result;
        console.log('source; ', source);
        console.log('destination; ', destination);

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let updatedGrp = items;

            this.props.onTskReorderStatus(updatedGrp);
        } else {
            console.log(source.droppableId);
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            // console.log(result);
            let data = {};

            data[source.droppableId] = result[source.droppableId];
            data[destination.droppableId] = result[destination.droppableId];
            Object.keys(data).forEach((key, index) => {
                this.props.onChangeTaskStatus(data[key]);
            });

        }
    };

    onDeletetask = (task) => {

        this.props.onDeleteTasks(task)

    }


    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                {this.props.tasks.groupList.map((grpName, index) => {
                    return (<Droppable key={grpName} droppableId={this.props.tasks[grpName].groupId}>
                        {(provided, snapshot) => {
                            return (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}>
                                    <strong><p style={{ margin: '5px 0px' }}>{this.props.tasks[grpName].currentStatus}</p></strong>
                                    {this.props.tasks[grpName].tasks.map((item, index) => (
                                        <Draggable
                                            key={item.taskId}
                                            draggableId={item.taskId}
                                            index={index}>
                                            {(provided, snapshot) => {
                                                return (<div className={`${item.taskId}`}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style,
                                                        item.status

                                                    )}>
                                                    <TaskCard data={item} clickDelete={this.onDeletetask}></TaskCard>

                                                </div>)
                                            }}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )
                        }}
                    </Droppable>);
                })
                }

            </DragDropContext>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        tasks: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTskReorderStatus: (reOrderedData) => dispatch({ type: actionTypes.GRP_TASK_REORDER, reOrderedData: reOrderedData }),
        onChangeTaskStatus: (updatedData) => dispatch({ type: actionTypes.CHANGE_TASK_STATUS, updatedData: updatedData }),
        onDeleteTasks: (selectedData) => dispatch({ type: actionTypes.DELETE_TASK, selectedData: selectedData })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragDropComponent);