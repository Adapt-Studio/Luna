import Link from 'next/link'
export default function Button(props) {
	return (
		<>
			<Link href={`${props.url}`}><button className="rounded-md shadow-md px-8 py-3 bg-blue-100">{props.text}</button></Link>
		</>	
	);
}
