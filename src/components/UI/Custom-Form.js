import React from 'react';
import {
    FormControl,
    TextField,
    Input,
    InputLabel,
    Select,
    MenuItem,
    Chip
} from '@material-ui/core';

const CustomForm = (props) => {
    return (
        <form>
            {/* Below Form control is for Title Input */}
            <FormControl fullWidth style={{ marginBottom: '10px' }}>
                <TextField
                    id="standard-multiline-flexible"
                    label="Title"
                    multiline
                    rowsMax={2}
                    name='title'
                    value={props.filterInput.title}
                    onChange={props.changed}
                />
            </FormControl>

            {/* Below Form control is for Type Selection */}
            <FormControl fullWidth style={{ marginBottom: '10px' }}>
                <InputLabel id="demo-dialog-select-label">Type</InputLabel>
                <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    value={props.filterInput.type}
                    name='type'
                    onChange={props.changed}
                    input={<Input />}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {props.menuItems.map(element => (
                        <MenuItem key={element.id} value={element.type}>{element.type}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Below Form control is for Description Input */}
            <FormControl fullWidth style={{ marginBottom: '10px' }}>
                <TextField
                    id="standard-multiline-flexible"
                    label="Description"
                    multiline
                    rowsMax={2}
                    name="description"
                    value={props.filterInput.description}
                    onChange={props.changed}
                />
            </FormControl>

            {/* Below Form control is for Priority Selection */}
            <FormControl fullWidth style={{ marginBottom: '10px' }}>
                <InputLabel id="demo-dialog-select-label">Priority</InputLabel>
                <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    name="priority"
                    value={props.filterInput.priority}
                    onChange={props.changed}
                    input={<Input />}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {props.priorities.map(priority => (
                        <MenuItem key={priority.id} value={priority.type}>{priority.type}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Below Form control is for Date Selection */}
            <FormControl fullWidth style={{ marginBottom: '10px' }}>
                <TextField
                    label="Due Date"
                    id="date"
                    type="date"
                    placeholder=''
                    name="dueDate"
                    value={props.filterInput.dueDate}
                    onChange={props.changed}
                    InputLabelProps={{ shrink: true, }}
                />
            </FormControl>

            {/* Below Form control is for User/Users Selection */}
            <FormControl fullWidth style={{ marginBottom: '10px' }}>
                <InputLabel id="demo-mutiple-chip-label">Assignee</InputLabel>
                <Select
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    multiple
                    name='selectedUsers'
                    value={props.filterInput.selectedUsers}
                    onChange={props.changed}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                        <div>
                            {selected.map((value, index) => (
                                <Chip key={value} label={value} />
                            ))}
                        </div>
                    )}
                    MenuProps={props.menuProps}
                >
                    {props.userList.map((user, index) => (
                        <MenuItem key={user.id} value={user.name}>
                            {user.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </form>
    );
}

export default CustomForm;