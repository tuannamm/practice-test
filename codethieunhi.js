const teacher = {
    firstName: 'Dan',
    lastName: 'Le'
}

const me = {
    firstName: 'Tuan',
    lastName: 'Nam',
    showFullName() {
        return(`${this.firstName} ${this.lastName}`);
    }
}

me.showFullName();

console.log(me.showFullName.call());