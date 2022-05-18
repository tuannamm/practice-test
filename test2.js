'use strict'

function sayHello(a, b) {
    console.log(this.name, a + b);
}

const student = {
    name: 'Tuan Nam',
}

const studentSayHello = sayHello.bind(student);
studentSayHello(2, 3);

sayHello.call(student, 10, 11);

sayHello.apply(student, [10, 10]);