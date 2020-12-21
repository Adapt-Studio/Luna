export default function Header() {
	return (
	<header className="w-screen h-28 inline-flex justify-center items-end mb-12">
		<nav className="space-x-24 py-1">
			<a href="/">Home</a>
			<a href="/about">About</a>
		</nav>
		<img  className="w-52 h-24 mx-28" src="/icons/logo.png" alt="Luna Logo" />
		<nav className="space-x-24 py-1">
			<a href="/shop">Shop</a>
			<a href="/contact">Contact</a>
		</nav>
	</header>
	);
}
