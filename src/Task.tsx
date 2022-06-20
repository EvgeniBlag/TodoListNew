import { Button, Checkbox, FormControlLabel, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import DeleteIcon from '@material-ui/icons/Delete';
import React, { ChangeEvent } from "react";
import { EditableSpan } from "./EditableSpan";
import { TaskType } from './Todolist'

type TaskPropsType = {
    changeStatusTask:(taskId:string, status:boolean)=>void
    removeHandler:(id: string)=>void
    task:TaskType
    todolistID: string
    onChangeTaskTitleHandler: (title:string)=> void
}


export const Task = (props:TaskPropsType) => {

    const deleteTaskHandler = ()=> {
        props.removeHandler(props.task.id)
    }

    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        props.changeStatusTask(props.task.id, e.currentTarget.checked )
    }


    const changeTaskTitle = (title: string) => {
        props.onChangeTaskTitleHandler(title)
    }

    return (
       <div>
        <li key={props.task.id} className={props.task.isDone ? "is-done" : ""}>

                <Checkbox
                    checked={props.task.isDone}
                    onChange={changeStatusHandler}
                /> 

              
        {/* <span>{props.task.title}</span> */}
         <EditableSpan old_title={props.task.title} changeItemText= {(title: string) => changeTaskTitle(title)}  />

                <IconButton onClick={deleteTaskHandler}>
                    <Delete />
                </IconButton>
    </li>
    </div>
   
    )
}


