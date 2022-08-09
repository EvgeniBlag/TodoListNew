import { v1 } from "uuid"
import { ObjTaskType } from "../Todolist"
import { removeTaskAC, tasksReducer } from "./TasksReduser"



let state:ObjTaskType


let todolistID1 :string 
let todolistID2 : string
let id:string

beforeEach(()=>{

    let todolistId1=v1()
    let todolistId2=v1()
    let id=v1()

    state =  {
        [todolistID1]: [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false },
            { id: v1(), title: "Rest API", isDone: false },
            { id: v1(), title: "GraphQL", isDone: false },
        ],
        [todolistID2]: [
            { id: v1(), title: "HTML&CSS2", isDone: true },
            { id: v1(), title: "JS2", isDone: true },
            { id: v1(), title: "ReactJS2", isDone: false },
            { id: v1(), title: "Rest API2", isDone: false },
            { id: v1(), title: "GraphQL2", isDone: false },
        ]
    }
})

test("Test para eliminar corectamente Task",()=>{

    //Data1:
    
    //TestFunction2:

   const endState = tasksReducer(state,removeTaskAC(todolistID1,id))

   //Test3:

  

})