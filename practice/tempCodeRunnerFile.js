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
        decrease,
        increase,
        getValue,
    }
}

const counter = creatCounter(1);
console.log(typeof counter);
counter.increase();
counter.increase();
counter.getValue();
