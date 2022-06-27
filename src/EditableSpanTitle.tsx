import React, { KeyboardEvent,ChangeEvent, useState } from "react";

type EditableSpanTitlePropsType = {
    title:string
    addTask:(newTitle:string)=>void
}

export const EditableSpanTitle = (props:EditableSpanTitlePropsType) => {

    const [newTitle,setNewTitle]=useState(props.title)
    let [error, setError] = useState<string | null>(null)
    const [edit, setEdit] = useState(false)
   

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    



    const EditTrueHandler = () => {
        setEdit(!edit)
        props.addTask(newTitle)
    }

     const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
         setError(null);
         if (e.key === "Enter") {
             props.addTask(newTitle);
         }
     }

    // const addTask = () => {
    //     let changeTitle = newTitle.trim();
    //     if (changeTitle !== "") {
    //         props.addTask(changeTitle);
    //         setNewTitle("");
    //     } else {
    //         setError("Title is required");
    //     }
    // }

    return (
        edit ?
            <input
                 onKeyPress={onKeyPressHandler}
                onBlur={EditTrueHandler}
                autoFocus
                type="text"
                value={newTitle}
                onChange={onChangeHandler}
            />
         :
            <span
                onDoubleClick={EditTrueHandler} >
                {props.title}
            </span>
    )
}