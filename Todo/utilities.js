// get list element
// retrieve todo from data store
//save to data store

//set a listener
export function qs(selector) {
    return document.querySelector(selector);
}

function getFromLS(key) {

}


function saveToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}