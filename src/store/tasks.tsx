

export const sum = (salary:number, n:number) => salary + n 

export const sub = (salary:number,n:number) => salary - n

export const multiply = (x:number,y:number) =>  x * y 



// export type ActionType = {
//     type:"SUM"
//     n:number
// }

// export type StateType = number


// export const salaryReduser = (state:StateType,action:ActionType)=> {

//     switch(action.type){

//         case"SUM":
//         return state + action.n

//       default: return state
    
//     }
// }

export type StateType = number

export type ActionType = {
    type:"RESTING"
    evgeny:number
    uliana:number
    aria:number
}

export const familyBlagodarnyy = (state:StateType,action:ActionType) => {
     switch(action.type){
        case"RESTING":

       return state + action.evgeny - action.uliana * action.aria

       dafault: return state

     }
}























