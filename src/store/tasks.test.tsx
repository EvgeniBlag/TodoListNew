import {sum} from "./tasks"


    test("Sueldo del trabajador", () => {

        //1 Datos del test:
        const salary: number = 800 
        const n: number = 200
    
        //2 Realizar test:
        const result = sum(salary,n)
    
        //3 Revision resulta:
        expect(result).toBe(1000)
    })

