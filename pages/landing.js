import Layout from '..components/layout'
import Button from '../components/button'
export default function Landing() {
	return (
	<Layout>
		<ShopHero/>		
		<div className="flex flex-col items-center">
			<Button url="/shop" text="Shop the Collection"/>
			<p>Lorem eos officiis adipisicing commodi libero Consequuntur sunt quae eaque iusto est Deleniti maxime mollitia minima repellat asperiores? Quos eum vel odit unde consequatur inventore eligendi Earum exercitationem obcaecati tenetur.</p>
		</div>
	</Layout>
	);
}
