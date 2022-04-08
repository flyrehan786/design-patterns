// In the example we have two Concrete Factories: EmployeeFactory and VendorFactory. 
// The first one creates Employee instances, the second one Vendor instances. 
// Both products are person types (with the same interface) which allows the client to 
// treat them the same. An array with two employees and two vendors is created. 
// Each person is then asked to say what and who they are.
function Employee(name) {
    this.name = name;
    this.say = function () {
        console.log("I am employee " + name);
    };
}
function EmployeeFactory() {
    this.create = function (name) {
        return new Employee(name);
    };
}
function Vendor(name) {
    this.name = name;
    this.say = function () {
        console.log("I am vendor " + name);
    };
}

function VendorFactory() {
    this.create = function (name) {
        return new Vendor(name);
    };
}
function run() {
    var persons = [];
    var employeeFactory = new EmployeeFactory();
    var vendorFactory = new VendorFactory();
    persons.push(employeeFactory.create("Joan DiSilva"));
    persons.push(employeeFactory.create("Tim O'Neill"));
    persons.push(vendorFactory.create("Gerald Watson"));
    persons.push(vendorFactory.create("Nicole McNight"));
    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }
}
