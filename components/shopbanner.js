import Link from 'next/link' 
export default function ShopBanner() {
	return (
	<div className="w-screen h-12 bg-blue-100 flex justify-between items-center px-6">
		<Link href="/landing"><a>Back</a></Link>
		<nav className="space-x-4">
			<a className="border-b-2 border-blue-200">New In</a>
			<a>All Products</a>
			<a>All Soap</a>
			<a>All Lip Balm</a>
		</nav>
		<a>
			<img className="w-10 h-10" src="/icons/cart.png" alt="Cart Icon"/>
		</a>
	</div>
	);
}
