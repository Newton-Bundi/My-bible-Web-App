// Populating the webpage with John:3:16

const init = () => {

    fetch(`https://bible-api.com/+${book} ${chapter}:+${verse}`)
        .then(response => response.json())
        .then(data => {
          let book = document.querySelector('#book').value;
          let chapter = document.querySelector('#chapter').value;
          let verse = document.querySelector('#verse').value;
          verse.innerText = data.text;
        }
        );   
    
        }; 


document.addEventListener('DOMContentLoaded', init); //we populate the web page on refresh
    

// Updating the  notes and passages

const inputForm1 = document.querySelector('button');
inputForm1.addEventListener('click', (event) => {

    event.preventDefault();

    // updating the server

    const description = document.querySelector('#description').value;

    let beerDescription = document.querySelector('#beer-description');
    beerDescription.innerText = description;

    let descriptionArray = {
      "description":description
    };

    // Updating the server

    fetch('http://localhost:3000/beers/1',{
      method: 'PATCH',
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(descriptionArray)
    }
).then((r) => r.json)
.then((description) => console.log(description))
.catch((e) => console.log(e))

    });

// Updating the  reviews (both in the server and in the webpage)

const inputForm2 = document.querySelector('#review-form').querySelector('button');
inputForm2.addEventListener('click', (event) => {
    
        event.preventDefault();

        fetch('http://localhost:3000/beers/1')
        .then(response => response.json())
        .then(data => {
    
          let reviews = data.reviews;
      

        let review = document.querySelector('#review').value;   // my review as a string

        reviews.push(review);
        
      // Updating the DOM

        
        let node = document.createElement("li");
        let textnode = document.createTextNode(review);
        node.appendChild(textnode);
        document.getElementById("review-list").appendChild(node);
        


        // Updating the server

    
        fetch('http://localhost:3000/beers/1',{
          method: 'PATCH',
          headers: {
            "Content-Type":"application/json"
          },
          body:JSON.stringify(
            {
            reviews:reviews
        })
        }
    ).then((r) => r.json)
    .then((review) => console.log(review))
    .catch((e) => console.log(e))
    
  }
  ) 

        });
