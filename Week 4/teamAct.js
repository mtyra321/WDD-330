var turn = 1;

function touch(element) {
    console.log("touched");
    if (turn == 1) {
        //make x
        element.innerHTML = "X";
        turn = 2;
    } else {
        //make o
        element.innerHTML = "O";

        turn = 1;

    }
}

function reset() {
    var array = document.getElementsByTagName("td");
    console.log("reset");
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.innerHTML = "";
    }
}