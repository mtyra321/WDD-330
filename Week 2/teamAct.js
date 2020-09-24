function displayInfo() {
    const div = document.getElementById("results");
    const info = document.getElementById("information").value;
    console.log(info);
    console.log("sdaws");
    div.innerText = info;

}

function addUpTo(num) {
    let sum = 0;
    const div = document.getElementById("results2");
    for (let index = 0; index <= num; index++) {
        sum += index;
    }
    div.innerText = sum;

}

function add() {
    let div = document.getElementById("results3");
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    div.innerText = parseInt(num1) + parseInt(num2);
}

function subtract() {
    let div = document.getElementById("results3");
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    div.innerText = parseInt(num1) - parseInt(num2);
}

function mult() {
    let div = document.getElementById("results3");
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    div.innerText = parseInt(num1) * parseInt(num2);
}

function division() {
    let div = document.getElementById("results3");
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    div.innerText = parseInt(num1) / parseInt(num2);
}