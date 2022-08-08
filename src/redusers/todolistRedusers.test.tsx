
import { type } from "os";
import { v1 } from "uuid"
import { todolistsType } from "../App";
import { addTodolistAC, removeTodoListAC, TodoListReduser } from "./TodoListReduser";

test("corecto eliminacion del todoList",()=>{
    //Data1:
    let todolistId1 = v1();
    let todolistId2 = v1();

    const state :todolistsType[]= [
        {id:todolistId1,title:"What to learn",filter:"all"},
        {id:todolistId2,title:"What to buy",filter:"all"},
    ]

    //TestFinction2:

      const endState = TodoListReduser( state, {type:"REMOVE-TODOLIST" , payload:{id:todolistId2}})

     const midleState = TodoListReduser(state, removeTodoListAC(todolistId1))


    //Test3:
     expect(endState.length).toBe(1)
     expect(endState[0].id).toBe(todolistId1)
     expect(endState[0].title).toBe("What to learn")


    //  expect(endState[0].title).notToBe("What to buy")
     expect(midleState[0].title).toBe("What to buy")
     expect(midleState.length).toBe(1)
     expect(midleState[0].id).toBe(todolistId2)
     expect(midleState[0].filter).toBe("all")

})

test("Test para aniadir corecto TodoList y Tasks",()=>{

    //Data1:

    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTodolistTitle = "New Todolist";

    let todoList:todolistsType = {
        id:v1(),
        title:newTodolistTitle,
        filter:"all"
    }

    const state :todolistsType[]= [
        {id:todolistId1,title:"What to learn",filter:"all"},
        {id:todolistId2,title:"What to buy",filter:"all"},
    ]
  
    //FunctionTest2:

    const endState = TodoListReduser(state, addTodolistAC(todoList))

    //Test3:

    expect(endState.length). toBe(3)
    expect(endState[2].title). toBe("New Todolist")

}
)