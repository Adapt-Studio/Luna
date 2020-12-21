import Layout from '../components/layout'
import Form from '../components/form'

export default function Contact() {
	return (
		<Layout>
			<div className="max-w-lg flex flex-col items-center text-center mx-auto">
				<h1 className="text-4xl font-thin">Contacting The Luna Collection...</h1>
				<p className="my-4">If you would like to get in touch feel free to send me a<br></br> message using the form below. Alternatively you can follow <br></br> my Facebook page...</p>
			</div>
			<Form/>
		</Layout>
	);
}
