import { ObjTaskType } from "../Todolist"

export const TasksReducer = ( state: ObjTaskType, action:tsarACType ) => {

  switch (action.type) {

    case "REMOVE-TASK":{
       return {...state, [action.payload.todolistID]: state[action.payload.todolistID].filter(t => t.id !== action.payload.id)}
    }
 
     default: return state

  }
}


type tsarACType = removeTaskACType 

type removeTaskACType = ReturnType<typeof removeTaskAC> 

export const removeTaskAC = (todolistID: string, id: string) => {
    return {
       type:"REMOVE-TASK",
       payload: {
        todolistID: todolistID,
        id:id
       }
    } as const
}