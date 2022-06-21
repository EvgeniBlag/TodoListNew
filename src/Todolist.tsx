import { Button, Grid, IconButton, TextField } from '@material-ui/core';
// import { ControlPoint, Delete } from '@material-ui/icons';
import AddBoxIcon from '@material-ui/icons/AddBox';
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import { Task } from './Task';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todolistID:string
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistID:string, taskId: string) => void
    changeFilter: (todolistID:string, value: FilterValuesType) => void
    addTask: (todolistID:string,title: string) => void
    changeTaskStatus: (todolistID:string,taskId: string, isDone: boolean) => void
    filter: FilterValuesType
    changeTaskTitle:  (taskId: string, newTitle: string, todolistId: string) => void
     removeTodoList: (id:string)=> void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(props.todolistID,title.trim());
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }

     const removeTodoList = () => props.removeTodoList(props.todolistID)

    const onAllClickHandler = () => props.changeFilter(props.todolistID , "all");
    const onActiveClickHandler = () => props.changeFilter(props.todolistID ,"active");
    const onCompletedClickHandler = () => props.changeFilter(props.todolistID ,"completed");
    const onChangeTaskTitleHandler = (taskId:string, newTitle: string) => {
        props.changeTaskTitle(taskId, newTitle, props.todolistID)
    }

    return(

        <Grid item>
            <div>
                <h3>
                    {props.title}
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={removeTodoList}
                    >
                        Delete All
                    </Button>
                </h3>
                <div>
                    <TextField
                        id="outlined-basic"
                        label="Type value"
                        variant="outlined"
                        value={title}
                        onChange={onChangeHandler}
                        onKeyPress={onKeyPressHandler}
                        className={error ? "error" : ""}
                        multiline
                        error={!!error}
                        helperText={error}
                    />
                    <IconButton
                        onClick={addTask}
                        color={'primary'}>
                        < AddBoxIcon />
                    </IconButton>
                </div>

                <ul>
                    {
                        props.tasks.map(t => {
                            const removeHandler = (taskId: string) => props.removeTask(props.todolistID, t.id)

                            const changeStatusTask = (taskId: string, status: boolean) => {
                                props.changeTaskStatus(props.todolistID, taskId, status);
                            }

                            return (
                                <Task
                                    changeStatusTask={changeStatusTask}
                                    removeHandler={removeHandler}
                                    task={t}
                                    todolistID={props.todolistID}
                                    onChangeTaskTitleHandler={(title: string) => onChangeTaskTitleHandler(t.id, title)}
                                />
                            )
                        })
                    }
                </ul>
                <div>
                    <Button

                        variant={props.filter === 'all' ? "contained" : "text"}
                        onClick={onAllClickHandler}>
                        All
                    </Button>

                    <Button
                        color={"primary"}
                        variant={props.filter === 'active' ? "contained" : "text"}
                        onClick={onActiveClickHandler}>
                        Active
                    </Button>

                    <Button
                        color={"secondary"}
                        variant={props.filter === 'completed' ? "contained" : "text"}
                        onClick={onCompletedClickHandler}>
                        Completed
                    </Button>
                </div>
            </div>

        </Grid>
    )
}
