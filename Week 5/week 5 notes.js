var allNotes = [];

function addNote(data, loading) {
    let li = document.createElement("li");
    var list = document.getElementById("base");
    li.innerHTML = data;
    console.log(li.innerHTML);
    list.appendChild(li);
    document.getElementById("input").innerText = "";
    allNotes.push(li.innerHTML);
    if (loading == false) {

        saveNotes();
    }
}

// document.getElementById("input").addEventListener("keydown", function(e) {
//     if (e.key === "Enter") { //checks whether the pressed key is "Enter"
//         validate(e);
//     }
// });



function saveNotes() {
    // const fs = require('fs');
    // console.log(allNotes);
    // let data = JSON.stringify(allNotes);
    // fs.writeFileSync('5notes.json', data);
    var blob = new Blob([JSON.stringify(allNotes)], { type: "text/plain;charset=utf-8" });
    download(JSON.stringify(allNotes), "./5notes.json", 'text/plain');


    localStorage.setItem("5notes", JSON.stringify(allNotes));

}


function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function deleteLastNote() {
    allNotes.pop();
    console.log(allNotes.length);
    saveNotes();
    let list = document.getElementById("base");
    list.innerText = "";
    loadNotes();
    //clearAllNotes();
}

function clearAllNotes() {
    allNotes = [];
    saveNotes();

}

function loadNotes() {
    allNotes = [];
    var a = localStorage.getItem("5notes");
    var parsed;
    try {
        parsed = JSON.parse(a); // this is how you parse a string into JSON 
    } catch (ex) {
        console.error(ex);
    }

    for (let index = 0; index < parsed.length; index++) {
        const element = parsed[index];
        addNote(element, true);
    }
}




// function download(content, fileName, contentType) {
//     var a = document.createElement("a");
//     var file = new Blob([content], { type: contentType });
//     a.href = URL.createObjectURL(file);
//     a.download = fileName;
//     a.click();
// }
// download(jsonData, 'json.txt', 'text/plain');