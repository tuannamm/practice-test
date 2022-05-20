const teacher = {
    fullName : "Minh Thu",
    isOnline : false,
    goOnline() {
        isOnline = true;
        console.log(`Hello ${this.fullName}`);
    },
    goOffline() {
        isOffline = true;
        console.log(`Bye ${this.fullName}`);
    }
};

const student = {
    fullName : 'Tuấn Nam',
    isOnline : false,
};

teacher.goOffline();
teacher.goOnline();
console.log("-------------------");
teacher.goOffline.apply(student);
teacher.goOnline.apply(student);