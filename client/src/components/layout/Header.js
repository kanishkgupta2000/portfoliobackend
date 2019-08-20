import React,{Fragment} from 'react'

const Header = () => {
    return (
       <Fragment>
<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
<div className="container">
<a className="navbar-brand" href="/home">Kanishk Gupta</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
<span className="oi oi-menu"></span> Menu
</button>
<div className="collapse navbar-collapse" id="ftco-nav">
<ul className="navbar-nav ml-auto">
<li className="nav-item"><a href="/about" className="nav-link">About</a></li>
{/* <li className="nav-item"><a href="/work" className="nav-link">Work</a></li> */}
<li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
</ul>
</div>
</div>
</nav>
       </Fragment>
    )
}

export default Header
