const express = require('express');

const app = express();

const port = 9000;

app.get('/', (req, res) => {
    res.send("your'e on the express server");
});

app.get('/api/TotoroFacts', (req, res) => {
    const Totoro = ["Some of the film was inspired by true events",
        "The name Totoro relates to the Japanese word for “troll”", 
        "Inspired by Alice in Wonderland",
        "Has dark conspiracy theories",
        "It was originally a double-feature with Grave of the Fireflies",
        "Never nominated for an Oscar, but it won several other awards",
        "Inspired the creators of Disney films like Toy Story and Up",
        "There will not be a sequel",
        "Totoro is a spirit of the forest, and his shape is inspired by several different animals", 
        "Totoro has easter eggs in other films"];
    res.send(JSON.stringify(Totoro));
});

app.get('/api/spiritedAway', (req, res) => {
    const spiritedfacts = ["Spirited Away was created without a script",
        "Miyazaki does everything", 
        "Chihiro was inspired by the daughter of one of the director’s friends",
        " The river spirit was inspired by Miyazaki’s experience cleaning a river",
        "The little extra scenes are called 'ma'",
        "Spirited Away broke box-office records",
        "The characters' names reflect who they are",
        "Dialog was added to clarify certain elements in the America version",
        "Miyazaki did not attend the 2003 Academy Awards Due to His Opposition to the Iraq War", 
        "You can visit the setting for Spirited Away in real life"];
    res.send(JSON.stringify(spiritedfacts));
});

app.listen(port, () => {
    console.log ("Listening on port", port)
});