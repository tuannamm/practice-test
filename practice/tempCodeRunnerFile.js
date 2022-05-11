function creatCounter(initialValue) {
    let value = initialValue || 0;
    
    function increase() {
        value++;
    }

    function decrease() {
        value--;
    }

    function getValue() {
        return value;
    }

    return {
        increase,
        decrease,
        getValue,
    }
}

console.log(creatCounter(1).increase());