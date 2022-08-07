import { v1 } from "uuid"
import { todolistsType } from "../App";
import { removeTodoListAC, TodoListReduser } from "./TodoListReduser";

test("corecto eliminacion del todoList",()=>{
    //Data1:
    let todolistId1 = v1();
    let todolistId2 = v1();

    const state :todolistsType[]= [
        {id:todolistId1,title:"What to learn",filter:"all"},
        {id:todolistId2,title:"What to buy",filter:"all"},
    ]

    //TestFinction2:
    const endState = TodoListReduser(state,removeTodoListAC(todolistId2))


    //Test3:
    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistId1)
    expect(endState[0].title).toBe("What to learn")
    // expect(endState[0].title).notToBe("What to buy")
    
})