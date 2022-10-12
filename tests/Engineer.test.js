
const Engineer = require("../lib/Engineer");

describe('Engineer Class', () => {
    describe('initialization', () => {
      it("should initialize the Engineer object and get correct properties.", () => {
        const en1 = new Engineer("Ben",1,"ben@email.com","githubID");
        expect(en1.name).toEqual("Ben");
        expect(en1.id).toEqual(1);
        expect(en1.email).toEqual("ben@email.com");
        expect(en1.github).toEqual("githubID");

      });
      
      it("should throw an error if provided no arguments", () => {
        const cb = () => new Engineer();
        expect(cb).toThrow(Error);
      });
    });

    describe("function",()=>{
      describe("getName function",()=>{
        it("should return the Engineer name when call getName()",()=>{
          let engineer = new Engineer("Ben",1,"ben@email.com","githubID");
          let result = "Ben";
          expect(engineer.getName()).toEqual(result);
        })
      })

      describe("getId function",()=>{
        it("should return the Engineer ID when call getId()",()=>{
          let engineer = new Engineer("Ben",1,"ben@email.com","githubID");
          let result = 1;
          expect(engineer.getId()).toEqual(result);
        })
      })

      describe("getEmail function",()=>{
        it("should return the Engineer email when call getEmail()",()=>{
          let engineer = new Engineer("Ben",1,"ben@email.com","githubID");
          let result = "ben@email.com";
          expect(engineer.getEmail()).toEqual(result);
        })
      })

      describe("getRole function",()=>{
        it("should return the Engineer title when call getRole()",()=>{
          let engineer = new Engineer("Ben",1,"ben@email.com","githubID");
          let result = "Engineer";
          expect(engineer.getRole()).toEqual(result);
        })
      })

    })
    
  });