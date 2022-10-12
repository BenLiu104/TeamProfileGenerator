
const Manager = require("../lib/Manager");

describe('Manager Class', () => {
    describe('initialization', () => {
      it("should initialize the Manager object and get correct properties.", () => {
        const mg1 = new Manager("Ben",1,"ben@email.com","1234567890");
        expect(mg1.name).toEqual("Ben");
        expect(mg1.id).toEqual(1);
        expect(mg1.email).toEqual("ben@email.com");
        expect(mg1.phone).toEqual("1234567890");

      });
      
      it("should throw an error if provided no arguments", () => {
        const cb = () => new Manager();
        expect(cb).toThrow(Error);
      });
    });

    describe("function",()=>{
      describe("getName function",()=>{
        it("should return the Manager name when call getName()",()=>{
          let manager = new Manager("Ben",1,"ben@email.com","123456790");
          let result = "Ben";
          expect(manager.getName()).toEqual(result);
        })
      })

      describe("getId function",()=>{
        it("should return the Manager ID when call getId()",()=>{
          let manager = new Manager("Ben",1,"ben@email.com","123456790");
          let result = 1;
          expect(manager.getId()).toEqual(result);
        })
      })

      describe("getEmail function",()=>{
        it("should return the Manager email when call getEmail()",()=>{
          let manager = new Manager("Ben",1,"ben@email.com","123456790");
          let result = "ben@email.com";
          expect(manager.getEmail()).toEqual(result);
        })
      })

      describe("getRole function",()=>{
        it("should return the Manager title when call getRole()",()=>{
          let manager = new Manager("Ben",1,"ben@email.com","123456790");
          let result = "Manager";
          expect(manager.getRole()).toEqual(result);
        })
      })

    })
    
  });