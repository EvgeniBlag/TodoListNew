 import {sum,sub, multiply, StateType, ALLActionType, universalComponent, FullType} from "./tasks"




// test("Testing universalComponent",()=>{
//     //1Data:

//     const state:StateType = 10

//     const actionPluso:ALLActionType = {
//         type:"PLUSO",
//         i:12,
//         u:3
//     }

//     const actionMixOperation:ALLActionType = {
//         type:"MIXOPERATION",
//         evgeny:11,
//         blagodarnyy:84
//     }

//     const actionMenos:ALLActionType ={
//         type:"MENOS",
//         n:3,
//         m:81
//     }
//     const actionPlus:ALLActionType ={
//         type:"PLUS",
//         n:32,
//         m:8
//     }
//     const actionMultiply:ALLActionType ={
//         type:"MULTIPLU",
//         n:2,
//         m:81
//     }

//     //2functionTest:
//     // const probePlusoOperationComponent = universalComponent(state,actionPluso)
//     const probeMixOperationComponent = universalComponent(state,actionMixOperation)
//     const probeMenosUniversalComponent = universalComponent(state,actionMenos)
//     const probePlusUniversalComponent = universalComponent(state,actionPlus)
//     const probeMultiplyUniversalComponent = universalComponent(state,actionMultiply)



//     //3Test:
//     expect(universalComponent(state,actionPluso)).toBe(1)
//     expect(probeMixOperationComponent).toBe(105)
//     expect(probeMenosUniversalComponent).toBe(-71)
//     expect(probePlusUniversalComponent).toBe(42)
//     expect(probeMultiplyUniversalComponent).toBe(1620)
//     expect(universalComponent(state,actionMultiply)).toBe(1620)
// })




 test("probe,of primitiv function",()=>{

    //Data1:
    const state:StateType = 15


     const testPlus:FullType = {
        type:"PLUS",
        a:3,
        b:6
    }

    const testMenos : FullType ={
        type:"MENOS",
        t:1,
        y:2
    }

    //Test2:

    expect(universalComponent(state,testPlus)).toBe(24)
    expect(universalComponent(state,testMenos)).toBe(18)
 })























