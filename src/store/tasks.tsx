

export const sum = (salary:number, n:number) => salary + n 

export const sub = (salary:number,n:number) => salary - n

export const multiply = (x:number,y:number) =>  x * y 



export type StateType = number

export type ALLActionType = PlusType|MenosType|MultipluType



export type MenosType = {
    type :"MENOS"
    n:number
    m:number
}

export type PlusType = {
    type : "PLUS"
    n:number
    m:number
}
export type MultipluType = {
    type : "MULTIPLU"
    n:number
    m:number
}

export const universalComponent = (state:StateType,action:ALLActionType)=>{

    switch(action.type){
        case"MENOS":
       return state - action.m

       case"PLUS":
       return state + action.n

       case"MULTIPLU":
       return state * action.n * action.m

       default: 
       return state

    }
}





















