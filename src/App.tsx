import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import { AppBar, Button, Container, Grid, IconButton, Toolbar, Typography  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export type todolistsType = {
        id: string
        title: string
        filter:FilterValuesType
}

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let todolistID1=v1();
    let todolistID2=v1();

    const classes = useStyles();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

     const removeTodoList = (id:string) => {
        setTodolists(todolists.filter(t=>t.id !==id))
       let newTasks = {...tasks}
       delete newTasks[id]
        setTasks (newTasks)
     }

    let [tasks, setTasks] = useState({
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
       
          setTasks({...tasks,[todolistID]:tasks[todolistID].filter(t=>t.id != id)});
      }

      function addTask(todolistID:string,title: string) {
          let newTask = {id: v1(), title: title, isDone: false};
       
          setTasks({...tasks,[todolistID]: [newTask, ...tasks[todolistID]]});
      }

      function changeStatus(todolistID:string, taskId: string, isDone: boolean) {
           setTasks({...tasks,[todolistID]:tasks[todolistID].map(t=>t.id === taskId ? {...t,isDone:isDone}:t)});
      }

     function changeFilter(todolistID:string,value: FilterValuesType) {
        setTodolists(todolists.map(filtered=>filtered.id===todolistID ? {...filtered,filter:value}:filtered))
     }

     const changeTaskTitle  = (taskId: string, newTitle: string, todolistId: string) => {
        debugger
        let ourTodo = tasks[todolistId]
        let ourTask = ourTodo.find(task => task.id ===taskId)
        if (ourTask){
            ourTask.title= newTitle
        }
        setTasks({...tasks})
     }
     
     
    return (
       
            <div className={classes.root}>

            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>


            <Container fixed>
                <Grid container spacing={8}>
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
                        />
                    )
                })}
                </Grid>
            </Container>
        </div>

    );
}

export default App;


