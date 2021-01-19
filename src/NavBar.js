import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
	return (
		<div className="nav">
			<Link to="/">Home</Link>
			<ul>
				<li>About</li>
				<li>Blog</li>
				<li>Bla</li>
			</ul>
		</div>
	)
}
