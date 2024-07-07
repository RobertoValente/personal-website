const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, '../pages'));

app.use('/scripts', express.static(path.join(__dirname, '../scripts')));
app.use('/styles', express.static(path.join(__dirname, '../styles')));

app.get('/', (req, res) => {

    let tempData = {
        displayValeySpace: true,
        fileImage: 'https://media.licdn.com/dms/image/D4E03AQH3R5dUtxYHiw/profile-displayphoto-shrink_400_400/0/1689423953598?e=1726099200&v=beta&t=rbfJa37w5wregAwhPjIuEKVbpPyYkIjvEPDHZ2M_cH0',
        fullName: 'Roberto Valente',
        job: 'Web Developer',
        bio: 'Entusiasta pela tecnologia, sendo atraído pelas novidades que este mundo pode trazer!',
        linkInstagram: 'roberto.valennte',
        linkLinkedin: 'robertovalennte',
        linkGithub: 'RobertoValente',

        otherTitle1: 'Site da ValeySpace',
        otherLink1: 'https://valey.space/',

        otherTitle2: 'RoboCup 2023, França',
        otherLink2: 'https://www.correiodafeira.pt/equipa-da-secundaria-da-feira-participou-na-robocup23-em-bordeus/',

        otherTitle3: '',
        otherLink3: '',

        otherTitle4: '',
        otherLink4: '',

        email: 'robertovalentecontato@gmail.com',
    };

    res.render('index.html', { data: tempData });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

module.exports = app;