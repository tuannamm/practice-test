function count() {
    let number = 1;
    function display(str) {
        console.log(`${number} ${str}`);
    }
    return display;
}
const count1 = count();
count1("một");