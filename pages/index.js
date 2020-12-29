import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/hero'
import GhostBtn from '../components/ghost-btn'
import Reviews from '../components/reviews'
export default function Index() {
  return (
	  <Layout>
	  	<Hero/>
	  	<div className="w-4/5 flex flex-col justify-evenly items-center mx-auto my-12">
	  		<div className="flex flex-col space-y-3 flex justify-evenly mb-16 md:flex-row md:w-9/12">
	  			<div className="flex flex-col items-center">
	  				<img className="bg-gray-500 w-96 h-96 mb-5"/>
	  				<GhostBtn url="/shop" text="Shop All Soap"/>
	  			</div>
	  			<div className="flex flex-col items-center">
	  				<img className="bg-gray-500 w-96 h-96 mb-5"/>
	  				<GhostBtn url="/shop" text="Shop All Balm"/>
	  			</div>
	  		</div>
	  		<GhostBtn text="Shop All"/>
	  	</div>
	  	<Reviews/>
	  </Layout>
  );
}
