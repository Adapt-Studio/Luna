export default function Header() {
	function menuClick() {
		const menu = document.getElementById('menu');
		const clos = document.getElementById('close');
		menu.style.width   = '40vw';
		clos.style.display = 'block';
	}
	function menuClose() {
		const menu = document.getElementById('menu');
		const clos = document.getElementById('close');
		menu.style.width   = '0';
		clos.style.display = 'none';
	}
	return (
		<>
			<header className="hidden w-screen h-28 inline-flex justify-center items-end mb-12 md:flex">
				<nav className="space-x-24 py-1">
					<a href="/">Home</a>
					<a href="/about">About</a>
				</nav>
				<img className="w-52 h-24 mx-28" src="/icons/logo.png" alt="Luna Logo" />
				<nav className="space-x-24 py-1">
					<a href="/shop">Shop</a>
					<a href="/contact">Contact</a>
				</nav>
			</header>
			<header className="flex w-screen inline-flex justify-between items-start mb-12 px-4 pt-4 md:hidden">
				<a href="/"><img className="w-28" src="/icons/logo.png" alt="Luna Logo" /></a>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{width: '32px'}} onClick={menuClick}>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
				<div id="menu">
					<svg id="close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{width: '32px'}} onClick = { menuClose } >
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
					<nav>
						<ul>
							<li><a onClick={menuClose} href="/">Home</a></li>
							<li><a onClick={menuClose} href="/about">About</a></li>
							<li><a onClick={menuClose} href="/shop">Shop</a></li>
							<li><a onClick={menuClose} href="/contact">Contact</a></li>
						</ul>
					</nav>
				</div>
				<style jsx>{`
					#close {
						position: absolute;
						top: 5px;
						right: 5px;
						display: none;
					}
					#menu {
						display: none;
						width: 0;
						height: 100vh;
						display: flex;
						font-size: 1.5rem;
						position: fixed;
						top: 0;
						right: 0;
						box-shadow: 1px 3px 5px #1c1c1c;
						background: #F6CECE;
						transition: 0.4s ease;
					}
					#menu nav {
						padding: 2rem 0 0 1rem;
					}					
				`}</style>
			</header>
		</>
	);
}
