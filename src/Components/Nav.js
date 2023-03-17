 import  {Link} from 'react-router-dom'


export default function Nav(props) {
    return ( 
        <div>
         <nav className={`navbar navbar-expand-lg  navbar-${props.colour} bg-${props.colour}`}>
        <div className="container-fluid">
         <a className="navbar-brand" href="/">{props.title}</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
         </li>
         <li className="nav-item">
         <Link className="nav-link" to="/About">Link</Link>
         </li>
         <li className="nav-item dropdown">
         <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
         <ul className="dropdown-menu">
         <li><a className="dropdown-item" href="/">Action</a></li>
         <li><a className="dropdown-item" href="/">Another action</a></li>
         <li><hr className="dropdown-divider"/></li>
         <li><a className="dropdown-item" href="/">Something else here</a></li>
         </ul>
         </li>
         <li className="nav-item">
         <a className="nav-link disabled" href='/'>Disabled</a>
         </li>
         </ul>
         <button onClick={props.toggleMode0} style={{borderRadius:8, backgroundColor:"red", marginRight:8}}>R</button>
         <button onClick={props.toggleMode1} style={{borderRadius:8,  backgroundColor:"blue",marginRight:8}} >B</button>
         <button onClick={props.toggleMode2} style={{borderRadius:8,  backgroundColor:"green", marginRight:8}} >G</button>
         <button onClick={props.toggleMode3} style={{borderRadius:8,  backgroundColor:"secondary", marginRight:8}} >G</button>

        
        <div class="form-check form-switch" style={{color: props.colour === 'dark'?'white':'black'}} >
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.theme}/>
        <label class="form-check-label" for="flexSwitchCheckDefault">{props.btn}
        </label>
        </div>
        </div>
        </div>
        </nav>
        </div>
    )
}