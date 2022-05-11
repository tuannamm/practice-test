function creatCounter(initialValue) {
    var value = initialValue || 0;

    function increase() {
        value++;
    }

    function decrease() {
        value--;
    }

    function getValue() {
        console.log(value);
        return value;
    }

    return {
        increase: increase,
        decrease: decrease,
        getValue: getValue,
    }
}

const counter = creatCounter(1);
console.log(typeof counter);
counter.increase;
counter.getValue;


function count(number) {
    
    function display(str) {
    let newNumber = ++number;

        console.log(`${newNumber} ${str}`);
    }
    return display;
}
const count1 = count(0);
count1("một");
count1("hai");
count1("ba");
count1("bốn");
