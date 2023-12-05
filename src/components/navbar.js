function Navbar({onInput, onFilter}) {

  return (
        <div className="container-fluid p-0">
            <nav className="navbar bg-body-tertiary d-flex justify-items-center" data-bs-theme="dark">
                <span className="navbar-brand d-flex align-items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Red_Chinese_Dragon.svg/400px-Red_Chinese_Dragon.svg.png" className="align-text-top mx-4" alt="Sushi restaurant logo"/>
                    <span className="h3">React Bootstrap Sushi Restaurant Project</span>
                </span>
                
                <form className="d-flex mx-4" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search my sushi name" aria-label="Search" onChange={onInput}/>
                    <button className="btn btn-outline-danger" type="button" onClick={onFilter}>Search</button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar