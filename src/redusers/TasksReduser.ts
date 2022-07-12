import { v1 } from "uuid";
import { ObjTaskType } from "../Todolist"

export const TasksReducer = ( state: ObjTaskType, action:tsarACType ) => {

  switch (action.type) {

    case "REMOVE-TASK":{
          //   setTasks({...tasks,[todolistID]:tasks[todolistID].filter(t=>t.id != id)});
       return {...state, [action.payload.todolistID]: state[action.payload.todolistID].filter(t => t.id !== action.payload.id)}
    }

     case "ADD-TASK":{
        const taskId = v1()
        // setTasks({...tasks,[todolistID]: [newTask, ...tasks[todolistID]]});

        let newTask = {id: taskId, title:action.payload.title, isDone: false};

        return {...state,[action.payload.todolistID]:[newTask, ...state[action.payload.todolistID]]}
     }

     case "CHANGE-STATUS":{

      // {...tasks,[todolistID]:tasks[todolistID].map(t=>t.id === taskId ? {...t,isDone:isDone}:t)}

      return{...state,[action.payload.todolistID]
         :state[action.payload.todolistID]
         .map(t = t.payload.id === t.payload.taskId ? {...t,t.payload.isDone}:t)}

     }


  
      default: return state

  }
}


type tsarACType = removeTaskACType | addTaskACType | changeStatusACType | changeFilterACType


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


type addTaskACType = ReturnType<typeof addTaskAC> 
export const addTaskAC = (todolistID:string,title: string) => {
    return {
       type:"ADD-TASK",
       payload: {
        todolistID: todolistID,
        title:title,

       }
    } as const
}

type changeStatusACType = ReturnType<typeof changeStatusAC>
export const changeStatusAC = (todolistID:string, taskId: string, isDone: boolean) => {
   return{
      type:"CHANGE-STATUS",
      payload:{
       todolistID:todolistID,
       taskId:taskId,
       isDone:isDone
      }
   } as const
}

type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = () => {
   return{
      type:"CHANGE-FILTER",

   }
}