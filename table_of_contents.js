function poplist() {
    var list = document.getElementById("list");
    var arraylink = ["Week 1\\form.html"];
    var arrayname = ["week one form example"];

    for (let index = 0; index < arraylink.length; index++) {
        const element = arraylink[index];
        const name = arrayname[index];
        var li = document.createElement("li");
        //var a creates an A element
        var a = document.createElement("a");
        //set a to a href and give it the site link
        a.setAttribute('href', element);
        //make a display the name
        a.innerText = name;
        console.log(element);
        li.appendChild(a);

        console.log(li);
        list.appendChild(li);

    }
}