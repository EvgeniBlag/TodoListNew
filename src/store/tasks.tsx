

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

export type ActionType = {
    type:"MULTIPLY",
    item:number
}

export type StateType = number




export const multiplyAction = (state:StateType,action:ActionType) => {
    switch(action.type){
        case"MULTIPLY":
       return state * action.item
       
        default:
        return state
    }
}






















