import React, {ChangeEvent, useState, useReducer} from 'react';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import { Container, Grid, IconButton, TextField  } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { HeaderBar } from './HeaderBar';
import { addTaskAC, removeTaskAC, TasksReducer } from './redusers/TasksReduser';



export type todolistsType = {
        id: string
        title: string
        filter:FilterValuesType
}

export type FilterValuesType = "all" | "active" | "completed";

function App() {

     const [titleTodoList,setTitleTodolist] = useState("");

    let todolistID1=v1();
    let todolistID2=v1();

   

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

     const removeTodoList = (id:string) => {
        setTodolists(todolists.filter(t=>t.id !== id))
       let newTasks = {...tasks}
       delete newTasks[id]
        setTasks (newTasks)
     }

    //  let [tasks, setTasks] = useState({
    //      [todolistID1]:[
    //          {id: v1(), title: "HTML&CSS", isDone: true},
    //          {id: v1(), title: "JS", isDone: true},
    //          {id: v1(), title: "ReactJS", isDone: false},
    //          {id: v1(), title: "Rest API", isDone: false},
    //          {id: v1(), title: "GraphQL", isDone: false},
    //      ],
    //      [todolistID2]:[
    //          {id: v1(), title: "HTML&CSS2", isDone: true},
    //          {id: v1(), title: "JS2", isDone: true},
    //          {id: v1(), title: "ReactJS2", isDone: false},
    //          {id: v1(), title: "Rest API2", isDone: false},
    //          {id: v1(), title: "GraphQL2", isDone: false},
    //      ]
    //  });

     let [tasks, dispatchTasks] = useReducer(TasksReducer,{
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

      function removeTask(todolistID:string, id: string) {
       
        //   setTasks({...tasks,[todolistID]:tasks[todolistID].filter(t=>t.id != id)});
        dispatchTasks(removeTaskAC(todolistID, id))
      }

      function addTask(todolistID:string,title: string) {
          
          dispatchTasks(addTaskAC(todolistID,title));
      }

      function changeStatus(todolistID:string, taskId: string, isDone: boolean) {
           dispatchTasks(changeStatusAC(todolistID,taskId,isDone));
      }

     function changeFilter(todolistID:string,value: FilterValuesType) {
        setTodolists(todolists.map(filtered=>filtered.id===todolistID ? {...filtered,filter:value}:filtered))
     }

     const changeTaskTitle  = (taskId: string, newTitle: string, todolistId: string) => {
        dispatchTasks({...tasks,[todolistId]:tasks[todolistId].map(el=>el.id===taskId?{...el,title:newTitle}:el)})
     }

       const addNewTitleTodolist = (e: ChangeEvent<HTMLInputElement>) => {

          setTitleTodolist(e.currentTarget.value)

       }
     
    const addTodolist = () => {
        const newId = v1();
        const newTodolist: todolistsType = { id: newId, title: titleTodoList, filter: 'all' }
        setTodolists([newTodolist, ...todolists])
        dispatchTasks({...tasks, [newId]: [
                { id: v1(), title: "HTML&CSS2", isDone: true },
                { id: v1(), title: "JS2", isDone: true },
                { id: v1(), title: "ReactJS2", isDone: false },
                { id: v1(), title: "Rest API2", isDone: false },]
        })
        setTitleTodolist("")
       }
  
       
    const editTodolist = (todolistId:string,newTitle:string)=>{
        setTodolists(todolists.map(el=>el.id===todolistId?{...el,title:newTitle}:el))
    }
     
    return (
            <div>

            <HeaderBar/>
          
            <Container fixed>

           <div  style={{display:"flex",padding:"30px"}}>

                    <TextField
                      value={titleTodoList}
                      onChange={addNewTitleTodolist}
                     />

                     <IconButton
                     onClick={addTodolist}
                         color={'primary'}> 
                        < AddBoxIcon />
                    </IconButton> 
             <h4 style={{color:"green"}}> //Este campo , esta para añadir un bloque nuevo.</h4>
             </div>
                
              


                <Grid container spacing={8} style={{padding:"30px"}}>
                {todolists.map((mapTodolists: todolistsType) => {

                    let tasksForTodolist = tasks[mapTodolists.id];

                    if (mapTodolists.filter === "active") {
                        tasksForTodolist = tasks[mapTodolists.id].filter(t => t.isDone === false);
                    }
                    if (mapTodolists.filter === "completed") {
                        tasksForTodolist = tasks[mapTodolists.id].filter(t => t.isDone === true);
                    }
                    return (
                        <Todolist
                            removeTodoList={removeTodoList}
                            key={mapTodolists.id}
                            todolistID={mapTodolists.id}
                            title={mapTodolists.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={mapTodolists.filter}
                            changeTaskTitle={changeTaskTitle}
                            editTodolist={editTodolist}
                        />
                    )
                })}
                </Grid>
            </Container>
          </div>
      
       
    );
 
}

export default App;


