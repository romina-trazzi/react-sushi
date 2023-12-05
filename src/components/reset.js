function Reset({onReset}) {
  return (
    <button type="button" className="btn btn-outline-danger btn-sm" onClick={()=> onReset()}> Reset all</button>
  )
}
  
export default Reset