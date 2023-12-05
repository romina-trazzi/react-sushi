// Css style //
import './App.css';

// Components //
import Navbar from './components/navbar';
import Card from './components/card';
import Order from './components/order';
import Reset from './components/reset';
import Footer from './components/footer.js';

// Images //
import california from './img/california.png'
import dragon from './img/dragon.png';
import dynamite from './img/dynamite.png'
import philadelphia from './img/philadelphia.png'
import shrimp from './img/shrimp.png';
import rainbow from './img/rainbow.png';

// Hooks //

import { useState } from 'react';

function App() {

  /* USE STATE AND DATA */

  /* Data (array of objects) - useState rende il set di dati reattivo 
  e imposta lo stato iniziale dei dati grazie a setRolls*/
  const [rolls, setRolls]= useState([
    {
      id: 0, nome: 'California', prezzo: 1.99, immagine: california, quantità: 0
    },
    {
      id: 1, nome: 'Dragon', prezzo: 3.49, immagine: dragon, quantità: 0
    },
    {
      id: 2, nome: 'Dynamite', prezzo: 2.49, immagine: dynamite, quantità: 0
    },
    {
      id: 3, nome: 'Philadelphia', prezzo: 2.99, immagine: philadelphia, quantità: 0
    },
    {
      id: 4, nome: 'Rainbow', prezzo: 1.25, immagine: rainbow, quantità: 0
    },
    {
      id: 5, nome: 'Shrimp', prezzo: 3.79, immagine: shrimp, quantità: 0
    }
  ]);

  // Stato per gestire l'array di rolls filtrati
  const [filteredRolls, setFilteredRolls] = useState([]);

  /* Data (empty  string) - useState rende la stringa vuota reattiva 
  e imposta lo stato iniziale dei dati grazie a setInputText*/
  const [inputText, setInputText] = useState("");

  // Stato per gestire la visibilità del messaggio
  const [showNoRollMessage, setShowNoRollMessage] = useState(false);


  /* FUNCTIONS */

  // HandleDelete 
  const handleDelete = (id) => {
    /* Cicla su tutti i rolls e restituisci quello\quelli con id diverso dall'id ricevuto 
    come parametro */ 
    const newRolls = rolls.filter(roll => roll.id !== id); 
    /* Nuovi dati aggiornati e renderizzati */
    setRolls(newRolls);
  }

  // HandleAdd 
  const handleAdd = (id) => {

    // Trova l'indice dell'elemento con l'id dato nell'array rolls
    const indexRoll = rolls.findIndex(roll => roll.id === id);

    if (indexRoll !== -1) {
      // Se l'elemento esiste, incrementa la quantità dell'elemento corrispondente
      rolls[indexRoll].quantità++;
      /* Aggiorna e renderizza il nuovo stato dell'array dopo aver creato una copia dei dati 
      con l'operatore spread */
      setRolls([...rolls])  
    }
  }

  // HandleSub 
  const handleSub = (id) => {

    // Trova l'indice dell'elemento con l'id dato nell'array rolls
    const indexRoll = rolls.findIndex(roll => roll.id === id);

    if (indexRoll !== -1) {
      // Se l'elemento esiste, decrementa la quantità dell'elemento corrispondente (amenochè non sia = 0)
      if (rolls[indexRoll].quantità === 0) {
        rolls[indexRoll].quantità = 0;
      } else {
        rolls[indexRoll].quantità--;
      }

    }

    /* Aggiorna e renderizza il nuovo stato dell'array dopo aver creato una copia dei dati 
    con l'operatore spread */
    setRolls([...rolls])  
  }

  // HandleReset
  const handleReset = () => {

    // Crea copia dei dati dell'array
    const newRolls = [...rolls];
  
    newRolls.forEach((roll) => {
      if (roll.quantità !== 0) {
        roll.quantità = 0;
      }
    });
  
    // Aggiorna lo stato con il nuovo array
    setRolls(newRolls);
  };

  // HandleInput
  const handleInput = (event) => {

    // Riceve il testo dentro l'input e lo aggiorna ad ogni tasto 
    setInputText(event.target.value);
  };

  // HandleFilter 
  const handleFilter = () => {
    
    // Filtra l'array di rolls in base al nome di input
    let filteredRolls = rolls.filter(roll => roll.nome.toLowerCase().includes(inputText.toLowerCase()));
    
    
    if (filteredRolls.length > 0) {
  
      // Visualizza le card filtrate
      setFilteredRolls(filteredRolls);

    } else {

      // Visualizza nessuna card
      setFilteredRolls([]);
      setRolls([]);

      /* Mostra il messaggio "Nessun roll trovato", andando a modificare l'operatore ternario in JSX */
      setShowNoRollMessage(true);

      const clear = () => {
        setShowNoRollMessage(false);
        setRolls(rolls);
    
      }
      
      //Waiting per 2 secondi, poi svuota il campo inputText, cancella messaggio e ripristina le cards
      setTimeout(clear, 2000);
      
    }       
  }

  // HandleAlert
  const handleAlert = () => {
    
    // Selezione dei soli Roll con quantità diversa da 0
    let rollsBuy = (rolls.filter((roll) => roll.quantità !== 0));
    
    // Creazione della stringa di dettagli degli ordini
    let orderDetails = rollsBuy.map((roll) =>
    `- ${roll.quantità} ${roll.nome} rolls per un totale di ${(roll.quantità * roll.prezzo).toFixed(2)} euro.`);

    // Creazione dei parziali sotto forma di numeri
    let totalBill = rollsBuy.map((roll) => parseFloat((roll.quantità * roll.prezzo).toFixed(2)));
    
    // Somma dei valori di totalBill utilizzando reduce
    let grandTotal = totalBill.reduce((acc, curr) => acc + curr, 0).toFixed(2);

    // Messaggio finale
    let totalMessage = "Ciao, grazie per aver ordinato da React Bootstrap Sushi.\n \n Hai ordinato:\n \n" +
    orderDetails.join("\n") + "\n \n Il totale generale è: " + grandTotal + " euro.";

    
    alert(totalMessage); 

  }
    
  return (
  <>
    <div className="App">
      <Navbar value={inputText} onInput={handleInput} onFilter={handleFilter} />  
      <div className="container p-0">
        <h4 className="mt-4">Cosa desideri ordinare?</h4>
        <hr /> 
        <span id="noroll" style={{ display: showNoRollMessage ? 'inline' : 'none' }}> Nessun roll trovato </span>
        <div className ="row rolls m-0">
          <Card key={rolls.id} rolls={filteredRolls.length > 0 ? filteredRolls : rolls} onDelete={handleDelete} onAdd={handleAdd} onSub={handleSub}/>
        </div>

        <div className ="row order m-0">
          <div className="col d-flex justify-content-around p-0 m-2">
            <Order onAlert={handleAlert} rolls={rolls}/>
            <Reset onReset={handleReset}/> 
          </div>
        </div>
        
      </div>
      <Footer />

    </div>
  
  </>
  );
}

export default App;



