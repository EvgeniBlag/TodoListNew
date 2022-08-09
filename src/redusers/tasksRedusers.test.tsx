import { v1 } from "uuid"
import { ObjTaskType } from "../Todolist"
import { removeTaskAC, tasksReducer } from "./TasksReduser"



let state:ObjTaskType


let todolistID1 :string 
let todolistID2 : string
let id:string

beforeEach(()=>{

   

    state =  {
        'todolistID1': [
            { id: '1', title: "HTML&CSS", isDone: true },
            { id: '2', title: "JS", isDone: true },
            { id: '3', title: "ReactJS", isDone: false },
            { id: '4', title: "Rest API", isDone: false },
            { id: '5', title: "GraphQL", isDone: false },
        ],
        'todolistID2': [
            { id: '6', title: "HTML&CSS2", isDone: true },
            { id: '7', title: "JS2", isDone: true },
            { id: '8', title: "ReactJS2", isDone: false },
            { id: '9', title: "Rest API2", isDone: false },
            { id: '10', title: "GraphQL2", isDone: false },
        ]
    }
})

test("Test para eliminar corectamente Task",()=>{

    //Data1:
    
    //TestFunction2:

   const endState = tasksReducer(state,removeTaskAC('todolistID1','2'))

   //Test3:
 
  expect(endState).toEqual(
    {
        'todolistID1': [
            { id:'1', title: "HTML&CSS", isDone: true },
            // { id: v1(), title: "JS", isDone: true },
            { id: '3', title: "ReactJS", isDone: false },
            { id: '4', title: "Rest API", isDone: false },
            { id: "5", title: "GraphQL", isDone: false },
        ],
        'todolistID2': [
            { id: '6', title: "HTML&CSS2", isDone: true },
            { id: '7', title: "JS2", isDone: true },
            { id: '8', title: "ReactJS2", isDone: false },
            { id: '9', title: "Rest API2", isDone: false },
            { id: '10', title: "GraphQL2", isDone: false },
        ]
    }
  )
}
)
