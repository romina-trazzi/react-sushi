function Card( {rolls, onDelete, onAdd, onSub} ) {
  
  
  return (
    
    <div className="card p-2 border-0 d-flex flex-row flex-wrap justify-content-between align-items-center">
      {rolls.map((roll) => {
        
        // Destrutturazione proprietà dell'array di oggetti rolls, crea il singolo roll
        const {nome, prezzo, immagine, quantità, id} = roll;

        return(
          <div style={{width: "18rem", marginBottom: "2rem"}} key={id}>

            <img src={immagine} className="card-img-top" alt="This is my sushi roll" />
            
            <div className="card-body d-flex flex-column align-items-center">
              <h5 className="card-title">{nome} Roll</h5>
              <p className="card-text" style={{ marginBottom: "0rem"}}>${prezzo}</p>

              <div className="button-container d-flex my-1" >

                <button className="btn btn-primary m-2" style={{ width: "max-content" }} onClick={() => onAdd(id)}>
                  <span> + roll</span>
                </button>

                <span className="badge badge-dark d-flex align-items-center" style={{color:"black"}}>{quantità}</span>

                <button className="btn btn-primary m-2" style={{ width: "max-content" }} onClick={() => onSub(id)}>
                  <span> - roll</span>
                </button>

              </div>

              <button className="btn btn-danger" style={{ width: "60%" }} onClick={() => onDelete(id)}>
                <span> Delete roll</span>
              </button>

            </div>
          </div>
        )
      })}

    </div>

  )
}

export default Card


