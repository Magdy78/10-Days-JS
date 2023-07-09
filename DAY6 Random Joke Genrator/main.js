const jokeContainer = document.getElementById('jokeContainer');
const jokeBtn = document.getElementById('jokeBtn');
const API_URL = 'https://icanhazdadjoke.com/';

getJoke();
async function getJoke() {
    const res = await fetch(API_URL,{

        headers:{
            'Accept':'application/json'
        }
    });

    const date = await res.json();
    jokeContainer.innerHTML = date.joke;
};

jokeBtn.addEventListener('click' , getJoke);