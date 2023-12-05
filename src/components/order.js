import { useState, useEffect } from 'react';

function Order({onAlert, rolls}) {

// Stato per gestire il button Order
const [isButtonDisabled, setIsButtonDisabled] = useState(true);

// Controllo aggiornamento dati
useEffect(() => {

  // Verifica se tutte le quantità sono zero
  const allQuantitiesZero = rolls.every((roll) => roll.quantità === 0);

  // Aggiorna lo stato in base al risultato
  setIsButtonDisabled(allQuantitiesZero);  

  }, [rolls]); // L'effetto si attiva quando le quantità dei rolls cambiano

  return (
    <button type="button" className="btn btn-outline-danger btn-sm" onClick={onAlert} disabled={isButtonDisabled}> Ordina il tuo sushi  </button>
  )
}

export default Order 



