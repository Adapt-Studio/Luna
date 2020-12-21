import Button from './button'
export default function Hero() {
	return (
		<div className="w-screen flex flex-col justify-evenly items-center mt-12"> 
			<h1 className="font-serif text-5xl">Welcome to the Lunca Collection...</h1>
			<p className="max-w-lg text-center my-14">The Luna Collection is an organic range of beautiful smelling soaps, handmade with love in Cornwall, just for you...</p>
			<Button url="/about" text="Find Out More Here"/>
		</div>
	);
}
