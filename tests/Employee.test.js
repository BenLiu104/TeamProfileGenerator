
const Employee = require("../lib/Employee");

describe('Employee Class', () => {
    describe('initialization', () => {
      it("should initialize the Employee object and get correct properties.", () => {
        const em1 = new Employee("Ben",1,"ben@email.com");
        expect(em1.name).toEqual("Ben");
        expect(em1.id).toEqual(1);
        expect(em1.email).toEqual("ben@email.com");

      });
      
      it("should throw an error if provided no arguments", () => {
        const cb = () => new Employee();
        expect(cb).toThrow(Error);
      });
    });

    describe("function",()=>{
      describe("getName function",()=>{
        it("should return the Employee name when call getName()",()=>{
          let employee = new Employee("Ben",1,"ben@email.com");
          let result = "Ben";
          expect(employee.getName()).toEqual(result);
        })
      })

      describe("getId function",()=>{
        it("should return the Employee ID when call getId()",()=>{
          let employee = new Employee("Ben",1,"ben@email.com");
          let result = 1;
          expect(employee.getId()).toEqual(result);
        })
      })

      describe("getEmail function",()=>{
        it("should return the Employee email when call getEmail()",()=>{
          let employee = new Employee("Ben",1,"ben@email.com");
          let result = "ben@email.com";
          expect(employee.getEmail()).toEqual(result);
        })
      })

      describe("getRole function",()=>{
        it("should return the Employee title when call getRole()",()=>{
          let employee = new Employee("Ben",1,"ben@email.com");
          let result = "Employee";
          expect(employee.getRole()).toEqual(result);
        })
      })

    })
    
  });