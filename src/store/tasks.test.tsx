import {sum,sub} from "./tasks"


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

