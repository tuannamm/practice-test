const teacher = {
    firstName: 'Dan',
    lastName: 'Le'
}

const me = {
    firstName: 'Tuan',
    lastName: 'Nam',
    showFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

me.showFullName();

const fullNameTeacher = me.showFullName.bind(teacher);
fullNameTeacher();