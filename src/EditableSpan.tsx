import { TextField } from "@material-ui/core";
import React, { useState, ChangeEvent } from "react";


type EditableSpanPropsType = {
    old_title: string
    changeItemText:(title: string) => void
}


export const EditableSpan = (props:EditableSpanPropsType) => {
    let [editMode,setEditMode] = useState(false);
    let [title,setTitle] = useState(props.old_title);

    const activeEditMode = () => {
        setEditMode(true);
        setTitle(props.old_title);
    }

    const activateViewMode = () => {
        setEditMode(false);
        props.changeItemText(title)
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return(
         editMode
          ?
           <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
           :
           <span onDoubleClick={activeEditMode}>{props.old_title}</span>

    )
}