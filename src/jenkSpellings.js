function jenkspellings() {
    var spellings = ['jenku', 'njenku', 'njeku', 'jenlu', 'njeknu', 'jeknun', 'jenkins', 'kenlu', 'jalapeno', 'jackal', 'janky', 'jnkue', 'jonku', 'jeky', 'nkey', 'keyboard', 'junke', 'uknej', 'jekun', 'jenky', 'j_nk'
        , 'jenkuuu', 'jekn', 'junk', 'jonks', 'j4n2k', 'jenga', 'j3nk', 'juvenile', 'june', 'junle', 'jack', 'juank', 'jeuku', 'junk', 'juggle', 'the jenker', 'the jonker', 'cryptid', 'kas'];
    var randspellings = spellings[Math.floor(Math.random() * spellings.length)];
    var namesElement = document.getElementById("names");


    namesElement.classList.add('fade-out');
    setTimeout(function () {
        namesElement.innerHTML = randspellings;
        namesElement.classList.remove('fade-out');
    }, 750);
}

setInterval(jenkspellings, 4000);
