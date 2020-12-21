import Product from './product'
import {commerce} from '../pages/api/commerce'
export default function ProductList() {
	commerce.products.list().then((product) => console.log(product));
	return (
	<div className="w-4/5 flex justify-evenly items-cente mx-auto mt-12">
		<Product img="" title="Organic Liquid Hand Soap" price="£4.50" url=""/>
		<Product img="" title="Organic Lip Balm" price="£4.50" url=""/>
		<Product img="" title="Organic Hand Soap" price="£4.50" url=""/>
	</div>
	);
}
