import Link from 'next/link'
export default function Footer() {
	return (
		<footer className="bg-pink w-screen flex flex-col justify-evenly items-center mt-12">
			<div>
				<h1 className="text-center text-5xl font-serif mt-10">The Luna Collection</h1>
			</div>
			<div className="w-screen flex flex-col md:flex-row justify-evenly items-center md:items-start mt-24 -mb-16 text-center md:text-left md:space-y-0 space-y-8">
				<nav className="flex flex-col justify-evenly md:items-start">
					<h3>Contact</h3>
					<Link href="https://facebook.com"><a>Facebook</a></Link>
					<Link href="mailto:email@domain.com"><a>E-Mail</a></Link>
				</nav>
				<div className="flex flex-col justify-evenly items-center">
					<h3>Handmade</h3>
					<img className="w-16 h-16"  src="/icons/heart.png" alt="Handmade Icon"/>
				</div>
				<div className="flex flex-col justify-evenly items-center">
					<h3>Cruelty Free</h3>
					<img className="w-16 h-16" src="/icons/cruelty.png" alt="Cruelty Icon"/>
				</div>
				<nav className="flex flex-col justify-evenly md:items-end">
					<h3>Navigation</h3>
					<Link href="/"><a>Home</a></Link>
					<Link href="/Linkbout"><a>About</a></Link>
					<Link href="/landing"><a>Shop</a></Link>
					<Link href="/contact"><a>Contact</a></Link>
				</nav>
			</div>
			<div className="mt-40 mb-2 flex flex-col items-center">
				<span>&copy; Copyright 2020.</span>
				<Link href="https://Linkdaptstudio.co.uk"><a>Adapt Studio.</a></Link>
			</div>
		</footer>
	);
}
