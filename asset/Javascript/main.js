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

let team = [{
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'foto': 'wayne-barnett-founder-ceo.jpg'
    },

    {
        'nome': 'Angela Caroll',
        'ruolo': 'Chief Editor',
        'foto': 'angela-caroll-chief-editor.jpg'
    },

    {
        'nome': 'Walter Gordon',
        'ruolo': 'Office Manager',
        'foto': 'walter-gordon-office-manager.jpg'
    },

    {
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'foto': 'angela-lopez-social-media-manager.jpg'
    },

    {
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'foto': 'scott-estrada-developer.jpg'
    },

    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'foto': 'barbara-ramos-graphic-designer.jpg'
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


for (let i = 0; i < team.length; i++) {
    document.getElementById("grid").innerHTML += `
    <div class="row">
    <div class="col-4">
        <div class="card">
        <img src="./asset/img/${team[i]["foto"]}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
    </div>
        `;
    /*
    for(let key in listaFilm[i]){
        document.getElementById("titolo").innerHTML += `<div>${[key][Nome]}</div>`;
    }
    */
}


/*<div class="card text-center" style="width: 18rem;">
            <img src="./asset/img/${team[i]["foto"]}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 id="titolo" class="card-title">${team[i]["nome"]}</h5>
                <p class="card-text">${team[i]["ruolo"]}</p>
            </div>
        </div>*/