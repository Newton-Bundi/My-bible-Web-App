// Populating the webpage with John:3:16


const init = () => {

    fetch(`https://bible-api.com/john 3:16`)
        .then(response => response.json())
        .then(data => {

            
          text.innerText = data.text;
        }
        );   
        }; 


document.addEventListener('DOMContentLoaded', init); //we populate the web page on refresh