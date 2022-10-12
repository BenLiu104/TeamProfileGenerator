class Employee {

    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        if (isNaN(id)) {
            throw Error("Please input a Number")
        }
        if (!email.match("@")) {
            throw Error("Please input a valid email")
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName = () => this.name;

    getId = () => this.id;

    getEmail = () => this.email;

    getRole = () => "Employee";

}

module.exports = Employee;