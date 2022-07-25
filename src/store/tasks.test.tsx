import {sum,sub, multiply, StateType, ALLActionType, universalComponent} from "./tasks"




test("Testing universalComponent",()=>{
    //1Data:

    const state:StateType = 10

    const actionMenos:ALLActionType ={
        type:"MENOS",
        n:3,
        m:81
    }
    const actionPlus:ALLActionType ={
        type:"PLUS",
        n:32,
        m:8
    }
    const actionMultiply:ALLActionType ={
        type:"MULTIPLU",
        n:2,
        m:81
    }

    //2functionTest:
    const probeMenosUniversalComponent = universalComponent(state,actionMenos)
    const probePlusUniversalComponent = universalComponent(state,actionPlus)
    const probeMultiplyUniversalComponent = universalComponent(state,actionMultiply)



    //3Test:
    expect(probeMenosUniversalComponent).toBe(-71)
    expect(probePlusUniversalComponent).toBe(42)
    expect(probeMultiplyUniversalComponent).toBe(1620)
    expect(universalComponent(state,actionMultiply)).toBe(1620)
})




 























