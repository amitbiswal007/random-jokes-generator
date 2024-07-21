console.log("Hello world")
const jokesAPIURL = 'https://icanhazdadjoke.com/slack';

fetch(jokesAPIURL)
    .then(response => response.json())
    .then(data => {
        var jokeText=data.attachments[0].text;
        document.getElementById('joke').innerHTML=jokeText;
    })