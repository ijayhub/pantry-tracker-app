"use client"

import Link from "next/link";


const Navbar = () => {
	return (
		<div className='nav-container'>
			<nav className='nav'>
				<header>
					<h1 className='nav-header'>Pantrify</h1>
				</header>
				<ul className='flex'>
					<Link href="/home">
						<li className='nav-list'>Home</li>
					</Link>
					
					<Link href='/about'>
						<li className='nav-list'>About</li>
					</Link>
				</ul>
				<Link href='/form'>
					<button className='nav-btn'>Add New Item</button>
				</Link>
			</nav>
		</div>
	);
}

export default Navbar
