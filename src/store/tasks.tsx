

// export const sum = (salary:number, n:number) => salary + n 

// export const sub = (salary:number,n:number) => salary - n

// export const multiply = (x:number,y:number) =>  x * y 



// export type StateType = number

// export type ALLActionType = PlusType|MenosType|MultipluType|MixOperashon|Pluso



// export type MenosType = {
//     type :"MENOS"
//     n:number
//     m:number
// }

// export type PlusType = {
//     type : "PLUS"
//     n:number
//     m:number
// }
// export type MultipluType = {
//     type : "MULTIPLU"
//     n:number
//     m:number
// }

// export type MixOperashon = {
//     type : "MIXOPERATION"
//     evgeny : number
//     blagodarnyy : number
// }

// export type Pluso = {
//     type : "PLUSO"
//     i:number 
//     u:number
// }

// export const universalComponent = (state:StateType,action:ALLActionType)=>{

//     switch(action.type){
//         case"MENOS":
//        return state - action.m

//        case"PLUS":
//        return state + action.n

//        case"MULTIPLU":
//        return state * action.n * action.m

//        case "MIXOPERATION":
//         return state + action.evgeny + action.blagodarnyy

//         case "PLUSO":
//             return state - action.i + action.u

//        default: 
//        return state

//     }
// }


//  export type FullType = Plus|Menos

//  export type StateType = number

//  export type Plus = {
//      type:"PLUS"
//      a:number 
//      b:number 
//  }

//  export type Menos = {
//      type:"MENOS"
//      t:number 
//      y:number
//  }

//  export const universalComponent = (state:StateType,action:FullType) =>{
//      switch(action.type){
//          case "PLUS":
//              return state + action.a + action.b

//             case "MENOS":
//                 return state + action.t + action.y
    
//             default:
//              return  state
//      }
   
//  }


export type StateType = number

export type TodoType = MultipluType

export type MultipluType = {
    type:"MULTIPLU"
    a:number 
    b:number
}

export const nuestraComponenta = (state:StateType,action:TodoType)=>{
    switch(action.type){
        case"MULTIPLU":
        return state * action.a * action.b

        default:
            return state
    }
   
}















