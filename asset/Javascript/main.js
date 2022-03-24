/*Per la pagina 'Chi siamo' del nostro sito aziendale, dobbiamo sviluppare la sezione "Il nostro team".
Definiamo un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per 
stampare la relativa card: Nome, Ruolo e Foto.

Milestone 1: stampare in console l'elenco dei membri del team, scrivendo separatamente i dettagli di ciascun 
componente. (FATTO.)

Milestone 2: stampare i dati all'interno di un contenitore nella pagina html in modo dinamico, creando per 
ciascun membro del team un elemento che conterrà i suoi dati.

BONUS: stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.
Consigli del giorno:
Ragioniamo come sempre a step.
Scriviamo prima la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
Cosa conterrà il campo che rappresenta la foto in ciascun oggetto? Come possiamo fare per trasformarla in effettiva 
immagine visibile nell'html ?
Buon lavoro!*/

//Definiamo un array di oggetti per il nostro team
//Di cosa ho bisogno per creare un array? 

/*Milestone 1: stampare in console l'elenco dei membri del team, scrivendo separatamente i dettagli di ciascun 
componente. (FATTO.)*/

let team = 
[
    {
        'nome' :'Wayne Barnett',
        'ruolo' : 'Founder & CEO',
        'foto' : 'wayne-barnett-founder-ceo.jpg'
    },

    {
        'nome' :'Angela Caroll',
        'ruolo' : 'Chief Editor',
        'foto' : 'angela-caroll-chief-editor.jpg'
    },

    {
        'nome' :'Walter Gordon',
        'ruolo' : 'Office Manager',
        'foto' : 'walter-gordon-office-manager.jpg'
    }

    
];


console.log(team)

for (let i = 0; i < team.length; i++) {
    for (let key in team[i]) {
        console.log(team[i][key]);
        console.log(key);
    }
}

/*Milestone 2: stampare i dati all'interno di un contenitore nella pagina html in modo dinamico, creando per 
ciascun membro del team un elemento che conterrà i suoi dati.*/

