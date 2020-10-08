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
    localStorage.setItem("notes", JSON.stringify(allNotes));

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
    var a = localStorage.getItem("notes");
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