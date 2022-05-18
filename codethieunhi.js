this.firstName = "Tuan";
this.lastName = "Nam";

const student = {
    firstName: "Tun",
    lastName: "Nom",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(student.getFullName());
console.log(student.getFullName);

