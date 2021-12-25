import React from 'react'
import PropTypes from 'prop-types'
import About from './About'
import LogoutModal from './LogoutModal'

export default function Header(props) {
	return (
		<div>
			<nav className="navbar navbar-expand-lg  navbar-dark bg-dark py-3">
<div className="container-fluid">
  <a className="navbar-brand" href="#">{props.title}</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	<span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
	<ul className="navbar-nav me-auto mb-2 mb-lg-0">
	  <li className="nav-item">
		<a className="nav-link active" aria-current="page" href="#">Home</a>
	  </li>
	  <li className="nav-item">
		<a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#aboutModal">About</a>
	  </li>
	  <li className="nav-item">
		<a className="nav-link" href="#" id="navbarDropdown">
		  Extras
		</a>
	  </li>
	</ul>
	{props.enableSearch ? <form className="d-flex">
	  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
	  <button className="btn btn-outline-primary" type="submit">Search</button>
	</form> : ""}
	<ul className="navbar-nav me-2">
	  <li className="nav-item">
		<a className="nav-link active" aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#logoutModal">Logout</a>
	  </li>
	</ul>
  </div>
</div>
</nav>
<About/>
<LogoutModal logoutAction={props.logoutAction}/>
		</div>
	)
}

Header.proptotype ={
	title: PropTypes.string,
	enableSearch: PropTypes.bool
}