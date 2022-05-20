const teacher = {
    name: "Son Dang",
    age: 29,
    getInfor() {
        return `${this.name} ${this.age}`;
    }
};

const student = {
    name:  "Tuan Nam",
    age: 21,
}


console.log(teacher.getInfor());

const getInforStudent = teacher.getInfor.bind(student);
console.log(getInforStudent());
