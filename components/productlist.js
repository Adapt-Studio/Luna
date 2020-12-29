import Product from './product'
export default function ProductList() {
	return (
	<div className="flex-col space-y-16 md:space-y-0 md:flex-row md:w-4/5 flex justify-evenly items-center mx-auto md:space-x-4 mt-12">
		<Product img="/" title="Organic Liquid Hand Soap" price="£4.50" url="/"/>
		<Product img="/" title="Organic Lip Balm" price="£4.50" url="/"/>
		<Product img="/" title="Organic Hand Soap" price="£4.50" url="/"/>
	</div>
	);
}
