const Employee = require("./Employee");

class Engineer extends Employee{

    constructor(name,id,email,github){
        super(name,id,email);
        if(github==null){
            throw Error("Please input the github ID")
        }
        this.github = github;
    }

    getRole = () => "Engineer";

}

module.exports = Engineer;