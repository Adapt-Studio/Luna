export default function Form() {
	return (
	<form className="w-96 flex flex-col justify-evenly items-center space-y-6  mx-auto">
		<input className="bg-blue-100 w-full rounded-md px-5 py-2" type="text" name="name" placeholder="Your Name"/>
		<input className="bg-blue-100 rounded-md w-full px-5 py-2 " type="email" name="email" placeholder="Your E-Mail"/>
		<textarea className="h-40 bg-blue-100 rounded-md w-full px-5 py-2" name="message" placeholder="Your Message"></textarea>
		<button className="rounded-full bg-blue-100 w-20 h-20" type="submit">Send!</button>
	</form>
	);
}
