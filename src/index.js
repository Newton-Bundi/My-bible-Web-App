// Populating the webpage with John:3:16

let book = document.querySelector('#book').value;
let chapter = document.querySelector('#chapter').value;
let verse = document.querySelector('#verse').value;
let x = book + ' ' + chapter +':'+verse;

const init = () => {

    fetch(`https://bible-api.com/${x}`)
        .then(response => response.json())
        .then(data => {

            text.innerText = data.text;
        }
        );   
        }; 


document.addEventListener('DOMContentLoaded', init); //we populate the web page on refresh

// Updating DOM on click

const submit = document.querySelector('#verse-submit');
submit.addEventListener('click', (event) => {

    event.preventDefault();

        let book = document.querySelector('#book').value;
        let chapter = document.querySelector('#chapter').value;
        let verse = document.querySelector('#verse').value;
        let x = book + ' ' + chapter +':'+verse;

    fetch(`https://bible-api.com/${x}`)
        .then(response => response.json())
        .then(data => {

        text.innerText = data.text;

        }
        );
 });

// Updating the  notes and passages

const inputForm1 = document.querySelector('#notes-form');
inputForm1.addEventListener('submit', (event) => {

    event.preventDefault();

    // updating the DOM

    let notes = document.querySelector('#notes').value;

    let node = document.createElement("li");
    let textnode = document.createTextNode(notes);
    node.appendChild(textnode);
    document.getElementById("notes-list").appendChild(node);

    });