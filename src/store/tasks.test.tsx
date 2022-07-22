import {sum,sub, multiply, StateType, ActionType, salaryReduser} from "./tasks"


    test("Sueldo del trabajador", () => {

        //1 Datos del test:
        const salary: number = 800 
        const n: number = 200
    
        //2 Realizar test:
        const result = sum(salary,n)
    
        //3 Revision resulta:
        expect(result).toBe(1000)
    })

    test("Reducir solario del trabajador",()=>{

        //1 Datos del test:
        const salary: number = 1000
        const n: number = 100

        //2 Realisar test:
        const result2 = sub(salary,n)

        //3Revicion resulta:
        expect(result2).toBe(900)
        expect(salary).toBe(1000)
        expect(n).toBe(100)
        expect(sub(300,200)).toBe(100)
    })



    test ("multiplicamos equis a ygriega", ()=>{
        //1data:
        const x :number = 2
        const y :number = 3

        //2functhion test
           const result3 = multiply(x,y)

         //3Test
         
         expect(result3).toBe(6)
         expect(x).toBe(2)
         expect(y).toBe(3)
    })













    test("salary reduser", () => {

        //1 Data :

        const state: StateType = 1000
        const action: ActionType = {
            type:"SUM",
            n:100
        }
        //2 function
        const resultAction = salaryReduser(state,action)

        //3 test

        expect(resultAction).toBe(1100)

    })

