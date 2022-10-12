
const Intern = require("../lib/Intern");

describe('Intern Class', () => {
    describe('initialization', () => {
      it("should initialize the Intern object and get correct properties.", () => {
        const in1 = new Intern("Ben",1,"ben@email.com","UofT");
        expect(in1.name).toEqual("Ben");
        expect(in1.id).toEqual(1);
        expect(in1.email).toEqual("ben@email.com");
        expect(in1.school).toEqual("UofT");

      });
      
      it("should throw an error if provided no arguments", () => {
        const cb = () => new Intern();
        expect(cb).toThrow(Error);
      });
    });


    
    describe("function",()=>{
      describe("getName function",()=>{
        it("should return the Intern name when call getName()",()=>{
          let intern = new Intern("Ben",1,"ben@email.com","UofT");
          let result = "Ben";
          expect(intern.getName()).toEqual(result);
        })
      })

      describe("getId function",()=>{
        it("should return the Intern ID when call getId()",()=>{
          let intern = new Intern("Ben",1,"ben@email.com","UofT");
          let result = 1;
          expect(intern.getId()).toEqual(result);
        })
      })

      describe("getEmail function",()=>{
        it("should return the Intern email when call getEmail()",()=>{
          let intern = new Intern("Ben",1,"ben@email.com","UofT");
          let result = "ben@email.com";
          expect(intern.getEmail()).toEqual(result);
        })
      })

      describe("getRole function",()=>{
        it("should return the Intern title when call getRole()",()=>{
          let intern = new Intern("Ben",1,"ben@email.com","UofT");
          let result = "Intern";
          expect(intern.getRole()).toEqual(result);
        })
      })

    })
    
  });