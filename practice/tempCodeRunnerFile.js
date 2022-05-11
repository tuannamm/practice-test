function makeFunc() {
    var name = "Nom";

    function displayName() {
        console.log(name);
    }

    return displayName;
}

var myFunc = makeFunc();
console.log(myFunc.displayName);