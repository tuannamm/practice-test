
this.firstName = "Tuan"
this.lastName = "Nam"

const student = {
    firstName: "Tun",
    lastName: "Nom",
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const button = document.querySelector("button");

button.onclick = student.getFullName.bind(student);