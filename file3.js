var Student = /** @class */ (function () {
    function Student(firstname, middlename, lastname) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.fullname = firstname + " " + middlename + " " + lastname;
    }
    return Student;
}());
function greeter(p) {
    return "hello " + p.firstname + " " + p.lastname;
}
var user = new Student("tri", "gopi", "vinu");
console.log(greeter(user));
