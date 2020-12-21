import Layout from '../componenets/layout'
import ProductBanner from '../components/product-banner'
import GhostBtn from '../components/ghost-btn'
import Related from '../components/related'
export default function {id}() {
	return (
	<Layout>
		<ProductBanner/>
		<div className="w-4/5 flex justify-evenly items-center">
			<img src="" alt="" />
			<div className="flex flex-col">
				<h3>Product Name</h3>
				<h4>Subheading</h4>
				<div className="flex flex-col justify-evenly items-center">
					<h5>Quantity</h5>
					<div className="flex justify-evenly items-center">
						<button>-</button>
						<div>0</div>
						<button>+</button>
					</div>
				</div>
				<div className="flex flex-col>
					<p>Lorem ducimus nesciunt quis tempora.</p>
					<p>Lorem ducimus nesciunt quis tempora.</p>
					<p>Supplied in</p>
				</div>	
			</div>
		<Related/>
	</Layout>
	);
}
